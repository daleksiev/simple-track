"use client";

import { useState, useEffect } from "react";
import { Card } from "@/data-display";
import { Input } from "@/data-input";
import { PlusIcon, Cross2Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/core/actions";

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

export default function WorkoutPage() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  // Only load initial data on mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0];
    const savedWorkout = localStorage.getItem(`workout-${today}`);

    if (savedWorkout) {
      const workoutData: WorkoutData = JSON.parse(savedWorkout);
      setExercises(workoutData.exercises);
    } else {
      setExercises([{ name: "Exercise 1", weight: "", sets: [{ reps: "" }] }]);
    }
  }, []);

  const saveToLocalStorage = (updatedExercises: Exercise[]) => {
    const today = new Date().toISOString().split("T")[0];
    const workoutData: WorkoutData = {
      date: today,
      exercises: updatedExercises,
    };
    localStorage.setItem(`workout-${today}`, JSON.stringify(workoutData));
  };

  const getDayName = () => {
    return new Date().toLocaleDateString("en-US", { weekday: "long" });
  };

  const addSet = (exerciseIndex: number) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].sets.push({ reps: "" });
    setExercises(() => updatedExercises);
    saveToLocalStorage(updatedExercises);
  };

  const addExercise = () => {
    const updatedExercises = [
      ...exercises,
      {
        name: `Exercise ${exercises.length + 1}`,
        weight: "",
        sets: [{ reps: "" }],
      },
    ];
    setExercises(updatedExercises);
    saveToLocalStorage(updatedExercises);
  };

  const updateExercise = (
    index: number,
    field: keyof Exercise,
    value: string
  ) => {
    const updatedExercises = [...exercises];
    if (field === "name" || field === "weight") {
      updatedExercises[index][field] = value;
    }
    setExercises(updatedExercises);
    saveToLocalStorage(updatedExercises);
  };

  const updateSet = (
    exerciseIndex: number,
    setIndex: number,
    value: string
  ) => {
    const updatedExercises = [...exercises];
    updatedExercises[exerciseIndex].sets[setIndex].reps = value;
    setExercises(updatedExercises);
    saveToLocalStorage(updatedExercises);
  };

  const deleteSet = (exerciseIndex: number, setIndex: number) => {
    const updatedExercises = [...exercises];
    // Don't delete if it's the only set
    if (updatedExercises[exerciseIndex].sets.length <= 1) {
      return;
    }

    updatedExercises[exerciseIndex].sets = updatedExercises[
      exerciseIndex
    ].sets.filter((_, index) => index !== setIndex);
    setExercises(updatedExercises);
    saveToLocalStorage(updatedExercises);

    // Focus on the next input, or the previous one if we deleted the last set
    setTimeout(() => {
      const inputs = document.querySelectorAll(
        `[data-exercise="${exerciseIndex}"]`
      );
      const nextInput = inputs[setIndex] || inputs[inputs.length - 1];
      if (nextInput instanceof HTMLInputElement) {
        nextInput.focus();
      }
    }, 0);
  };

  const deleteExercise = (exerciseIndex: number) => {
    const updatedExercises = exercises.filter(
      (_, index) => index !== exerciseIndex
    );
    setExercises(updatedExercises);
    saveToLocalStorage(updatedExercises);
  };

  return (
    <div className="container p-6 w-full">
      <h1 className="text-3xl font-bold mb-8">{getDayName()}&apos;s Workout</h1>
      <Card>
        <Card.Body>
          <div className="divide-y flex flex-wrap justify-evenly gap-4 w-full">
            {exercises.map((exercise, exerciseIndex) => (
              <div
                key={exerciseIndex}
                className="w-80 bg-base-200 rounded-lg p-4 shadow-lg shadow-indigo-600 border border-indigo-600 "
              >
                <div className="flex  items-center gap-2 mb-3 justify-between">
                  <h1 className="text-2xl font-bold">
                    {exercise?.name || `Exercise ${exerciseIndex + 1}`}
                  </h1>
                  <Button
                    className="btn-square btn-sm"
                    variant="error"
                    onClick={() => deleteExercise(exerciseIndex)}
                  >
                    <Cross2Icon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1">
                    <label className="label">Exercise</label>
                    <Input
                      placeholder={exercise.name}
                      value={
                        exercise.name.startsWith(`Exercise `)
                          ? ""
                          : exercise.name
                      }
                      onChange={(e) =>
                        updateExercise(exerciseIndex, "name", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 items-end">
                  <div className="w-1/6">
                    <label className="label">Weight</label>
                    <Input
                      type="number"
                      placeholder="kg"
                      value={exercise.weight}
                      onChange={(e) =>
                        updateExercise(exerciseIndex, "weight", e.target.value)
                      }
                    />
                  </div>
                  {exercise.sets.map((set, index) => (
                    <div key={index} className="flex flex-wrap w-1/6">
                      Rep
                      <Input
                        type="number"
                        placeholder="Reps"
                        value={set.reps}
                        data-exercise={exerciseIndex}
                        autoFocus={index === exercise.sets.length - 1}
                        onChange={(e) =>
                          updateSet(exerciseIndex, index, e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (
                            (e.key === "Backspace" || e.key === "Delete") &&
                            set.reps === ""
                          ) {
                            e.preventDefault();
                            deleteSet(exerciseIndex, index);
                          } else if (e.key === "Enter" && set.reps !== "") {
                            e.preventDefault();
                            addSet(exerciseIndex);
                          }
                        }}
                      />
                    </div>
                  ))}
                  <button
                    className="btn btn-square btn-sm btn-outline"
                    onClick={() => addSet(exerciseIndex)}
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button className="btn btn-primary w-full" onClick={addExercise}>
              Add Exercise
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
