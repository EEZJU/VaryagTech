import { useState, useMemo } from 'react';
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

interface JobFilterProps {
  jobs: Job[];
  departments: readonly string[];
  locations: readonly string[];
}

export default function JobFilter({ jobs, departments, locations }: JobFilterProps) {
  const [selectedDept, setSelectedDept] = useState('全部');
  const [selectedLocation, setSelectedLocation] = useState('全部');
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const deptMatch = selectedDept === '全部' || job.department === selectedDept;
      const locMatch = selectedLocation === '全部' || job.location === selectedLocation;
      return deptMatch && locMatch;
    });
  }, [jobs, selectedDept, selectedLocation]);

  const toggleJob = (id: number) => {
    setExpandedJob(expandedJob === id ? null : id);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600">部门:</span>
          <div className="flex flex-wrap gap-2">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedDept === dept
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-600">地点:</span>
          <div className="flex flex-wrap gap-2">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedLocation === loc
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500">暂无符合条件的岗位</p>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleJob(job.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <div className="ml-4">
                  {expandedJob === job.id ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>

              {expandedJob === job.id && (
                <div className="px-6 pb-6 border-t border-slate-100">
                  <div className="pt-4">
                    <p className="text-slate-600 mb-4">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-800 mb-2">任职要求:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* <a
                      href={`mailto:hr@varyagtech.com?subject=应聘${job.title}`}
                      className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      立即申请
                    </a> */}
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {filteredJobs.length > 0 && (
        <p className="text-center text-sm text-slate-500 mt-6">
          共 {filteredJobs.length} 个岗位
        </p>
      )}
    </div>
  );
}