"use client";

import { Card } from "@/data-display";
import { useRouter } from "next/navigation";
import { BarChartIcon, PersonIcon, TimerIcon } from "@radix-ui/react-icons";

export default function DashboardContent() {
  const router = useRouter();

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
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
        <Card>
          <Card.Body>
            <div className="text-base-content/60 text-center py-8">
              <p>No recent activities</p>
              <button
                className="btn btn-primary mt-4"
                onClick={() => router.push("/workout")}
              >
                Start Workout
              </button>
            </div>
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
