import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";


/**
 * Render a list of JobCards.
 * 
 * Props: 
 *    - jobs
 * 
 * JobCardList --> JobCard
 */
function JobCardList({jobs}){

  const jobCards = jobs.map(j => <JobCard key={j.id} job={j}/>)

  return(<div>{jobCards}</div>)
}

export default JobCardList;