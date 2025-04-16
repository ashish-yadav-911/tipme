"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const [billAmount, setBillAmount] = useState<number | undefined>(undefined);
  const [tipPercentage, setTipPercentage] = useState(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number | undefined>(
    undefined
  );

  // Calculate tip amount
  const tipAmount = billAmount ? billAmount * (tipPercentage / 100) : 0;

  // Calculate total amount (bill + tip)
  const totalAmount = billAmount ? billAmount + tipAmount : 0;

  // Calculate amount per person
  const amountPerPerson =
    numberOfPeople && totalAmount ? totalAmount / numberOfPeople : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Card className="w-full max-w-md space-y-4 p-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Tip Me</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Bill Amount Input */}
          <div className="grid gap-2">
            <Label htmlFor="billAmount">Bill Amount</Label>
            <Input
              type="number"
              id="billAmount"
              placeholder="Enter bill amount"
              value={billAmount !== undefined ? billAmount.toString() : ""}
              onChange={(e) =>
                setBillAmount(e.target.value ? parseFloat(e.target.value) : 0)
              }
            />
          </div>

          {/* Tip Percentage Selection */}
          <div className="grid gap-2">
            <Label htmlFor="tipPercentage">Tip Percentage ({tipPercentage}%)</Label>
            <Slider
              id="tipPercentage"
              defaultValue={[tipPercentage]}
              max={30}
              step={1}
              onValueChange={(value) => setTipPercentage(value[0])}
            />
          </div>

          {/* Split Bill Input */}
          <div className="grid gap-2">
            <Label htmlFor="numberOfPeople">Split Among</Label>
            <Input
              type="number"
              id="numberOfPeople"
              placeholder="Number of people"
              value={
                numberOfPeople !== undefined ? numberOfPeople.toString() : ""
              }
              onChange={(e) =>
                setNumberOfPeople(
                  e.target.value ? parseFloat(e.target.value) : 0
                )
              }
            />
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md mt-6 p-4 space-y-4 rounded-lg shadow-md">
        <CardHeader>
          <CardTitle className="text-center">Results</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid gap-1">
            <Label>Tip Amount:</Label>
            <span>{tipAmount.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="grid gap-1">
            <Label>Total Amount:</Label>
            <span>{totalAmount.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="grid gap-1">
            <Label>Amount Per Person:</Label>
            <span>{amountPerPerson.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>
      <div className="mt-4">
        <Button variant="primary">Save Preference</Button>
      </div>
    </div>
  );
}
