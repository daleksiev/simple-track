"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/data-display";
import { Button } from "@/actions";
import { Modal } from "@/actions";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ExerciseSet {
  reps: string;
}

interface Exercise {
  name: string;
  weight: string;
  sets: ExerciseSet[];
}

interface WorkoutData {
  date: string;
  exercises: Exercise[];
}

export default function HistoryPage() {
  const router = useRouter();
  const [workouts, setWorkouts] = useState<{ [key: string]: WorkoutData }>({});
  const [workoutToDelete, setWorkoutToDelete] = useState<{
    key: string;
    date: string;
  } | null>(null);
  const [showToast, setShowToast] = useState(false);

  const loadWorkouts = () => {
    const allWorkouts: { [key: string]: WorkoutData } = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("workout-")) {
        const workout = JSON.parse(localStorage.getItem(key) || "");
        allWorkouts[key] = workout;
      }
    }

    const sortedWorkouts = Object.fromEntries(
      Object.entries(allWorkouts).sort(
        ([, a], [, b]) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
    );

    setWorkouts(sortedWorkouts);
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isToday = (dateString: string) => {
    const today = new Date().toISOString().split("T")[0];
    return dateString === today;
  };

  const deleteWorkout = (key: string) => {
    localStorage.removeItem(key);
    loadWorkouts();
    setWorkoutToDelete(null);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
  };

  const goToTodayWorkout = () => {
    router.push("/workout");
  };

  const today = new Date().toISOString().split("T")[0];
  const hasWorkoutToday = Object.values(workouts).some(
    (workout) => workout.date === today
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Workout History</h1>
        <Button variant={"primary"} onClick={goToTodayWorkout}>
          {hasWorkoutToday
            ? "Continue Today's Workout"
            : "Start Today's Workout"}
        </Button>
      </div>

      <div className="space-y-6">
        {Object.entries(workouts).map(([key, workout]) => (
          <Card
            key={key}
            className={`overflow-hidden ${
              isToday(workout.date)
                ? "border-2 border-primary"
                : "border-2 border-gray-600"
            }`}
          >
            <Card.Body>
              <div className="flex justify-between items-center mb-4">
                <h2 className="card-title text-xl">
                  {formatDate(workout.date)}
                  {isToday(workout.date) && (
                    <span className="badge badge-primary ml-2">Today</span>
                  )}
                </h2>
                <Button
                  className="ml-4 w-8 h-8 p-0"
                  variant="error"
                  onClick={() =>
                    setWorkoutToDelete({ key, date: workout.date })
                  }
                  aria-label="Delete workout"
                >
                  <Cross2Icon className="w-4 h-4" />
                </Button>
              </div>

              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr>
                      <th>Exercise</th>
                      <th>Weight (kg)</th>
                      <th>Sets x Reps</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workout.exercises.map((exercise, index) => (
                      <tr key={index}>
                        <td>{exercise.name || "-"}</td>
                        <td>{exercise.weight || "-"}</td>
                        <td>
                          <div className="flex flex-wrap gap-2">
                            {exercise.sets.map((set, setIndex) => (
                              <span
                                key={setIndex}
                                className="badge badge-primary"
                              >
                                {set.reps || "0"} reps
                              </span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </Card>
        ))}

        {Object.keys(workouts).length === 0 && (
          <Card>
            <Card.Body>
              <div className="text-center text-base-content/60">
                No workout history found
              </div>
            </Card.Body>
          </Card>
        )}
      </div>

      <Modal
        isOpen={!!workoutToDelete}
        onClose={() => setWorkoutToDelete(null)}
      >
        <h3 className="font-bold text-lg mb-4">Delete Workout</h3>
        <p>
          Are you sure you want to delete the workout from{" "}
          {workoutToDelete ? formatDate(workoutToDelete.date) : ""}?
        </p>
        <p className="text-sm text-base-content/60 mt-2">
          This action cannot be undone.
        </p>
        <div className="modal-action">
          <Button variant="accent" onClick={() => setWorkoutToDelete(null)}>
            Cancel
          </Button>
          <Button
            variant="error"
            onClick={() =>
              workoutToDelete && deleteWorkout(workoutToDelete.key)
            }
          >
            Delete
          </Button>
        </div>
      </Modal>

      {showToast && (
        <div className="toast toast-end">
          <div className="alert alert-success">
            <span>Workout deleted successfully</span>
          </div>
        </div>
      )}
    </div>
  );
}
