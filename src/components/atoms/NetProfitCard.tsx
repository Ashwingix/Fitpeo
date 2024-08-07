"use client";

import { ArrowUpIcon, TrendingUp } from "lucide-react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RadialChart } from "./RadialChart";

export function NetProfitCard() {
  return (
    <Card className="flex items-center justify-center">
      <CardContent className="flex flex-col xs:flex-row xs:gap-4 justify-between  xs:ml-3 overflow-hidden">
        <div className="flex items-center gap-2 font-medium leading-none text-lg ">
          Next Target
        </div>
        <div className="text-2xl xs:text-3xl lg:text-5xl text-left justify-center">
          $ 6759.25
        </div>

        <div className="flex text-xl ">
          <ArrowUpIcon /> 3%
        </div>
      </CardContent>
      <CardContent className="flex flex-col pb-0  justify-between h-full">
        <RadialChart />
        <CardFooter className="flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 font-medium leading-none pt-2">
            Trending up by 5.2% this month <TrendingUp className="h-4 w-4 " />
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
