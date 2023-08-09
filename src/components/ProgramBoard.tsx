'use client'

import { useEffect, useState } from 'react'
import { getPrograms } from '@/libs/api/local/ApiRequest';
import ProgramCard from './ProgramCard'

function ProgramBoard() {
  const [programs, setPrograms] = useState<any[]>([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const programs = await getPrograms();
  
      setPrograms(programs);
    }

    fetchPrograms();
  }, []);

  return (
    <div className="program-board">
      {programs.map((program) => {
        return (
          <ProgramCard key={program.id} program={program}/>
        )
      })}
    </div>
  )
}

export default ProgramBoard