import React from 'react';
import LoadingTMI from '../components/loading/LoadingTMI';
import ProgressBar from '../components/loading/LoadingProgressBar';

export default function Loading() {
  return (
    <div>
      <LoadingTMI />
      <ProgressBar />
    </div>
  );
}
