"use client";

import { Card } from "@/data-display";
import { useRouter } from "next/navigation";
import { BarChartIcon, PersonIcon, TimerIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/core/actions/Button";
import { useState, useEffect } from "react";
import Link from "next/link";

interface ExerciseSet {
  weight: number;
  reps: number;
}

interface Exercise {
  name: string;
  sets: ExerciseSet[];
}

interface WorkoutData {
  date: string;
  exercises: Exercise[];
}

export default function DashboardContent() {
  const router = useRouter();
  const [recentExercises, setRecentExercises] = useState<
    { name: string; date: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const workoutHistory = JSON.parse(
        localStorage.getItem("workoutHistory") || "[]"
      ) as WorkoutData[];

      const exercisesWithDates = workoutHistory
        .flatMap((workout) =>
          workout.exercises.map((exercise) => ({
            name: exercise.name,
            date: workout.date,
          }))
        )
        .filter((exercise) => exercise.name)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

      setRecentExercises(exercisesWithDates);
    } catch (error) {
      console.error("Error loading workout history:", error);
      setRecentExercises([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB"); // DD/MM/YYYY format
  };

  if (isLoading) {
    return (
      <div className="container mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-8 bg-base-200 rounded w-48 mb-4"></div>
          <div className="space-y-3">
            <div className="h-20 bg-base-200 rounded"></div>
            <div className="h-20 bg-base-200 rounded"></div>
            <div className="h-20 bg-base-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <Card.Body>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <TimerIcon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base-content/60">
                  Today&apos;s Workout
                </h3>
                <p className="text-2xl font-bold text-primary">0 min</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg">
                <PersonIcon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-semibold text-base-content/60">
                  Weekly Goal
                </h3>
                <p className="text-2xl font-bold text-secondary">0/5</p>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <BarChartIcon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-base-content/60">
                  Calories Burned
                </h3>
                <p className="text-2xl font-bold text-accent">0</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="mb-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>

        <Button variant="primary" onClick={() => router.push("/workout")}>
          Start Workout
        </Button>

        <Card>
          <Card.Body>
            {recentExercises.length > 0 ? (
              <div className="space-y-2">
                {recentExercises.map((exercise, index) => (
                  <div
                    key={`${exercise.name}-${index}`}
                    className="flex justify-between items-center p-3 bg-base-300 rounded-lg hover:bg-base-200 transition-colors"
                  >
                    <span className="font-medium">{exercise.name}</span>
                    <span className="text-base-content/60 text-sm">
                      {formatDate(exercise.date)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="mb-4">No recent activities</p>
                <Link href="/workout">
                  <Button>Start Workout</Button>
                </Link>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="hover:bg-base-300 transition-colors cursor-pointer">
            <Card.Body className="items-center text-center py-6">
              <TimerIcon className="w-6 h-6 mb-2" />
              <p className="font-semibold">Start Workout</p>
            </Card.Body>
          </Card>

          <Card className="hover:bg-base-300 transition-colors cursor-pointer">
            <Card.Body className="items-center text-center py-6">
              <PersonIcon className="w-6 h-6 mb-2" />
              <p className="font-semibold">Log Exercise</p>
            </Card.Body>
          </Card>

          <Card className="hover:bg-base-300 transition-colors cursor-pointer">
            <Card.Body className="items-center text-center py-6">
              <BarChartIcon className="w-6 h-6 mb-2" />
              <p className="font-semibold">View Progress</p>
            </Card.Body>
          </Card>

          <Card className="hover:bg-base-300 transition-colors cursor-pointer">
            <Card.Body className="items-center text-center py-6">
              <BarChartIcon className="w-6 h-6 mb-2" />
              <p className="font-semibold">View Stats</p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
