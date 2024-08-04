"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from 'react' ;

import Form from "@components/Form";

export function UpdatePrompt() {
  return (
    // You could have a loading skeleton as the `fallback` too

    <Suspense>
      <UpdatePromptSkeleton />
    </Suspense>
  )
}