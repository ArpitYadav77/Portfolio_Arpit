import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

interface Props {
  personal: PersonalInfo;
}

interface FormState {
  name: string;
  email: string;
  role: string;
  message: string;
  file: File | null;
  consent: boolean;
}

const Contact: React.FC<Props> = ({ personal }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    role: 'Frontend Engineer',
    message: '',
    file: null,
    consent: false
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const roles = ["Full Stack Engineer", "Backend Engineer", "Frontend Engineer", "DevOps Engineer", "Recruiter / HR"];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // 5MB limit
      if (file.size > 5 * 1024 * 1024) {
        alert("File size too large. Max 5MB.");
        return;
      }
      if (file.type !== 'application/pdf') {
        alert("Only PDF files are allowed.");
        return;
      }
      setFormData({ ...formData, file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    // Basic Validation
    if (!formData.consent) {
        setStatus('error');
        setErrorMsg("Please agree to the privacy policy.");
        return;
    }

    try {
      // MOCK API CALL: Replace with actual fetch to serverless endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/fail for demo (mostly success)
      setStatus('success');
      setFormData({ name: '', email: '', role: roles[0], message: '', file: null, consent: false });
    } catch (err) {
      setStatus('error');
      setErrorMsg("Failed to send message. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Let's Connect</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Interested in my work? Fill out the form below or email me directly at <a href={`mailto:${personal.email}`} className="text-primary-600 hover:underline font-medium">{personal.email}</a>.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-950 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-800">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="mt-6 text-primary-600 font-medium hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">I am hiring for / asking about</label>
                <select
                  id="role"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                >
                  {roles.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                  placeholder="Hi, I reviewed your projects and..."
                ></textarea>
              </div>

              <div>
                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Attach Job Description (Optional PDF, Max 5MB)</label>
                 <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors relative">
                    <div className="space-y-1 text-center">
                        <div className="flex text-sm text-slate-600 dark:text-slate-400 justify-center">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" accept=".pdf" onChange={handleFileChange} />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-500">
                            {formData.file ? `Selected: ${formData.file.name}` : 'PDF up to 5MB'}
                        </p>
                    </div>
                 </div>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({...formData, consent: e.target.checked})}
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="privacy" className="font-medium text-slate-700 dark:text-slate-300">I consent to having this website store my submitted information so they can respond to my inquiry.</label>
                </div>
              </div>

              {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md text-sm">
                      <AlertCircle size={16} />
                      {errorMsg}
                  </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                    <><Loader2 size={20} className="animate-spin" /> Sending...</>
                ) : (
                    <><Send size={20} /> Send Message</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;