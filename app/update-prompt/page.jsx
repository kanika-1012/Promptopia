"use client";

import { Suspense } from 'react' ;
import  UpdatePromptSkeleton  from './update-promt-skeleton'; 
export default function UpdatePrompt() {
  return (
    // You could have a loading skeleton as the `fallback` too

    <Suspense>
      <UpdatePromptSkeleton />
    </Suspense>
  )
}