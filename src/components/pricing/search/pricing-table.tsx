import Button from "@/components/button";
import * as React from "react";

export default function PricingTable() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/**/}

      {/* FREE */}

      <div className="flex flex-col items-center gap-4 rounded-4xl bg-white p-6 shadow sm:gap-6 sm:p-8 dark:border-bg-mute dark:bg-bg-mute">
        <div className="grow">
          <h4 className="mb-4 py-1 text-xl font-bold text-primary-text">
            Free
          </h4>

          <h5 className="text-2xl font-semibold">$0</h5>
          <p className="text-sm text-text-mute">-</p>
        </div>

        <div className="grow">
          <div className="text-balance rounded-lg bg-bg-mute px-3 py-2 text-sm text-primary-text dark:text-text-mute">
            Perfect for prototypes and hobby projects
          </div>
        </div>

        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Monthly Query Limit</p>
            <p className="font-semibold">20K</p>
          </div>
        </div>
        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Max Records</p>
            <p className="font-semibold">200K</p>
          </div>
        </div>

        <div>
          <Button asChild variant="primary">
            <a target="_self" href="https://console.upstash.com">
              Start Now
            </a>
          </Button>
        </div>
      </div>

      {/* PAYG */}

      <div className="flex flex-col items-center gap-4 rounded-4xl border-2 border-primary bg-white p-6 shadow sm:gap-6 sm:p-8 dark:border-bg-mute dark:bg-bg-mute">
        <div className="grow">
          <h4 className="mb-4 py-1 text-xl font-bold text-primary-text">
            Pay as you go
          </h4>

          <h5 className="text-2xl font-semibold">$0.05</h5>
          <p className="text-sm text-text-mute">per 1K requests</p>
        </div>

        <div className="grow">
          <div className="text-balance rounded-lg bg-bg-mute px-3 py-2 text-sm text-primary-text dark:text-text-mute">
            For use cases with bursting traffic
          </div>
        </div>

        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Monthly Query Limit</p>
            <p className="font-semibold">Unlimited</p>
          </div>
        </div>
        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Max Records</p>
            <p className="font-semibold">Unlimited</p>
          </div>
        </div>

        <div>
          <Button asChild variant="primary">
            <a target="_self" href="https://console.upstash.com">
              Start Now
            </a>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-4xl bg-white p-6 shadow sm:gap-6 sm:p-8 dark:border-bg-mute dark:bg-bg-mute">
        <div className="grow">
          <h4 className="mb-4 py-1 text-xl font-bold text-primary-text">Pro</h4>

          <h5 className="flex items-baseline text-2xl font-semibold">Coming Soon</h5>
          <p className="text-sm text-text-mute">-</p>
        </div>

        <div className="grow">
          <div className="text-balance rounded-lg bg-bg-mute px-3 py-2 text-sm text-primary-text dark:text-text-mute">
            For consistent loads with predictable costs
          </div>
        </div>

        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Monthly Query Limit</p>
            <p className="font-semibold">Unlimited</p>
          </div>
        </div>
        <div className="w-full px-6 *:border-b *:border-bg-mute">
          <div className="py-3">
            <p className="text-text-mute">Max Records</p>
            <p className="font-semibold">Unlimited</p>
          </div>
        </div>

        <div>
          <Button asChild variant="primary">
            <a target="_self" href="#">
              Coming Soon
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
