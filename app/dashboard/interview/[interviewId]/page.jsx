"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
const Interview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [webCamEnable, setWebcamEnable] = useState(false);
  useEffect(() => {
    GetInterviewDetails();
    console.log(interviewData);
  }, []);

  //used to get interview details from our orm drizzle database
  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    setInterviewData(result[0]);
  };
  return (
    <div className="my-10 ml-8 mr-8">
      <h2 className="font-bold text-2xl">Let's get started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5 ">
          <div className="flex flex-col p-5 rounded-lg border gap-5">
            <h2 className="text-lg">
              <strong>Job Role/Job Position: </strong>
              {interviewData?.jobPosition}
            </h2>
            <h2 className="text-lg">
              <strong>JobDescription/Tech Stack: </strong>
              {interviewData?.jobDesc}
            </h2>
            <h2 className="text-lg">
              <strong>Years of experience: </strong>
              {interviewData?.jobExperience}
            </h2>
          </div>
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500 ">
              <Lightbulb />
              <strong>Information</strong>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>
        <div>
          {/* <Webcam/> */}
          {webCamEnable ? (
            <Webcam
              onUserMedia={() => setWebcamEnable(true)}
              onUserMediaError={() => setWebcamEnable(false)}
              style={{ height: 300, width: 300 }}
              mirrored={true}
            />
          ) : (
            <>
              <WebcamIcon className="h-72 my-7 w-full p-20 bg-secondary rounded-lg border" />
              <Button
                onClick={() => setWebcamEnable(true)}
                className="w-full font-bold"
                variant="ghost"
              >
                Enable web cam and microphone
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-end items-end">
        <Link href={"/dashboard/interview/" + params.interviewId + "/start"}>
          <Button>Start Interview</Button>
        </Link>
      </div>
    </div>
  );
};

export default Interview;
