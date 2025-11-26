import React, { useState } from 'react';
import { JobPosting } from '../types';
import { Button } from '../components/Button';
import { Briefcase, MapPin, Upload } from 'lucide-react';

const JOBS: JobPosting[] = [
  {
    id: 'job-1',
    title: 'Position Title 1',
    location: 'Location City',
    type: 'Full-time',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
  },
  {
    id: 'job-2',
    title: 'Position Title 2',
    location: 'Location City',
    type: 'Full-time',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 'job-3',
    title: 'Position Title 3',
    location: 'Location City',
    type: 'Full-time',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
];

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Overlay */}
       <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
         <div className="bg-white/95 p-8 rounded-xl shadow-2xl border-2 border-brand-blue text-center max-w-md backdrop-blur-sm">
            <div className="text-4xl mb-4">🚧</div>
            <h2 className="text-2xl font-bold text-brand-dark mb-2">Content Under Construction</h2>
            <p className="text-gray-600">This page is currently being drafted. Final copy and imagery will be available for review in the next phase.</p>
         </div>
       </div>

      {/* Blurred Content */}
      <div className="filter blur-md opacity-50 pointer-events-none select-none h-screen overflow-hidden">
        <div className="bg-brand-gray text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
            
            {/* Job List */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                <Briefcase className="text-brand-blue" /> Open Positions
              </h2>
              <div className="space-y-4">
                {JOBS.map((job) => (
                  <div key={job.id} className="border border-gray-200 p-6 rounded-lg hover:border-brand-blue transition-colors bg-white shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded uppercase">{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <MapPin size={14} className="mr-1" /> {job.location}
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => {
                        setSelectedJob(job.title);
                        document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Apply For This Job
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div id="application-form" className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-brand-blue h-fit">
              <h2 className="text-2xl font-bold text-brand-dark mb-6">Quick Application</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                  <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                      <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none" />
                  </div>
                  <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                      <input required type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Position Interested In</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none"
                    value={selectedJob}
                    onChange={(e) => setSelectedJob(e.target.value)}
                  >
                    <option value="">-- Select a Position --</option>
                    {JOBS.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                    <option value="General Application">General Application</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Years of Experience</label>
                  <input type="text" placeholder="e.g., 2 years industrial, 5 years driving" className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none" />
                </div>

                <div className="flex items-center gap-2 py-2">
                  <input type="checkbox" id="cdl" className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue" />
                  <label htmlFor="cdl" className="text-sm text-gray-700">I have a valid CDL</label>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Upload Résumé (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer relative">
                      <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                      <Upload className="mx-auto text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Click to upload PDF or DOCX</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Why do you want to join us?</label>
                  <textarea rows={3} className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-brand-blue focus:outline-none"></textarea>
                </div>

                <div className="flex items-start gap-2 py-2">
                  <input required type="checkbox" id="consent" className="w-4 h-4 text-brand-blue rounded border-gray-300 focus:ring-brand-blue mt-1" />
                  <label htmlFor="consent" className="text-xs text-gray-600">
                    I agree to the privacy policy.
                  </label>
                </div>

                <Button type="submit" className="w-full" size="lg">Submit Application</Button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};