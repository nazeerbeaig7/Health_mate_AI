import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Plus, 
  Search, 
  Filter, 
  ChevronDown, 
  Video, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Stethoscope,
  Clock3,
  X,
  ArrowRight
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Mock data for frontend demonstration
const mockDoctors = [
  { id: 1, name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { id: 2, name: 'Dr. Michael Chen', specialty: 'Dermatologist', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { id: 3, name: 'Dr. Emily Wilson', specialty: 'Pediatrician', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
];

const mockAppointmentSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

const appointmentTypes = [
  { id: 'general', name: 'General Checkup', icon: Stethoscope },
  { id: 'followup', name: 'Follow-up Visit', icon: Clock3 },
  { id: 'consultation', name: 'Video Consultation', icon: Video },
  { id: 'specialist', name: 'Specialist Visit', icon: User },
];

function Appointments() {
  const { currentUser } = useAuth();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('general');
  const [showBookForm, setShowBookForm] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');

  // Use mock data for selection
  const [doctors] = useState(mockDoctors);
  const [appointmentSlots] = useState(mockAppointmentSlots);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // No initial data
  useEffect(() => {
    setAppointments([]);
  }, []);

  const handleBookAppointment = (e) => {
    e.preventDefault();
    
    if (!selectedDoctor || !selectedTime) {
      alert('Please select both a doctor and time slot');
      return;
    }
    
    const doctor = doctors.find(d => d.id === selectedDoctor);
    
    const newAppointment = {
      id: Date.now(),
      doctor: doctor,
      date: selectedDate.toISOString().split('T')[0],
      time: selectedTime,
      type: appointmentType,
      status: 'pending',
      notes: e.target.notes?.value || '',
      isVirtual: appointmentType === 'consultation',
      location: appointmentType === 'consultation' ? 'Virtual' : 'Main Hospital'
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setShowBookForm(false);
    
    // Reset form
    setSelectedDoctor(null);
    setSelectedTime('');
    
    // Show success message
    alert('Appointment booked successfully!');
  };

  const filteredAppointments = appointments.filter(appt => {
    if (activeTab === 'upcoming') {
      return appt.status !== 'completed' && appt.status !== 'cancelled';
    } else if (activeTab === 'past') {
      return appt.status === 'completed' || appt.status === 'cancelled';
    }
    return true;
  }).filter(appt => 
    (appt.doctor?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    appt.notes?.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const upcomingAppointments = appointments.filter(appt => 
    appt.status !== 'completed' && appt.status !== 'cancelled'
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500">
            <svg className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-2 text-lg font-medium text-gray-900">Error loading appointments</h3>
          <p className="mt-1 text-sm text-gray-500">{error}</p>
          <div className="mt-6">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
              <p className="text-gray-500">Manage your medical appointments</p>
            </div>
            <button
              onClick={() => setShowBookForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-blue-500">
            <h3 className="text-sm font-medium text-gray-500">Upcoming</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">
              {upcomingAppointments.length}
            </p>
            <p className="mt-1 text-sm text-gray-500">Appointments scheduled</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-green-500">
            <h3 className="text-sm font-medium text-gray-500">Next Appointment</h3>
            {upcomingAppointments.length > 0 ? (
              <>
                <p className="mt-1 text-xl font-semibold text-gray-900">
                  {new Date(upcomingAppointments[0].date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
                <p className="text-sm text-gray-500 flex items-center">
                  <Clock className="h-4 w-4 mr-1 text-gray-400" />
                  {upcomingAppointments[0].time} with {upcomingAppointments[0].doctor?.name?.split(' ')[0] || 'Doctor'}
                </p>
              </>
            ) : (
              <p className="mt-1 text-gray-500">No upcoming appointments</p>
            )}
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-purple-500">
            <h3 className="text-sm font-medium text-gray-500">Doctors</h3>
            <p className="mt-1 text-3xl font-semibold text-gray-900">
              {doctors.length}
            </p>
            <p className="mt-1 text-sm text-gray-500">Available specialists</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`${activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`${activeTab === 'past' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Past Appointments
            </button>
            <button
              onClick={() => setActiveTab('doctors')}
              className={`${activeTab === 'doctors' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Find a Doctor
            </button>
          </nav>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Search appointments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            <Filter className="h-5 w-5 text-gray-400 mr-2" />
            Filter
            <ChevronDown className="ml-2 h-5 w-5 text-gray-400" />
          </button>
        </div>

        {/* Appointments List */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          {filteredAppointments.length > 0 ? (
            <ul className="divide-y divide-gray-200">
              {filteredAppointments.map((appointment) => (
                <li key={appointment.id} className="hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-4">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            {appointment.doctor?.name || 'Doctor'}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {appointment.doctor?.specialty || 'Specialist'}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {new Date(appointment.date).toLocaleDateString('en-US', { 
                            weekday: 'short', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </p>
                        <p className="text-sm text-gray-500">{appointment.time}</p>
                      </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <div className="flex items-center text-sm text-gray-500">
                        {appointment.isVirtual ? (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Video className="h-3 w-3 mr-1" />
                            Video Call
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <MapPin className="h-3 w-3 mr-1" />
                            {appointment.location || 'In-Person'}
                          </span>
                        )}
                        <span className="ml-2">
                          {appointment.notes}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          View Details
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          Join Call
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No appointments</h3>
              <p className="mt-1 text-sm text-gray-500">
                {activeTab === 'upcoming' 
                  ? "You don't have any upcoming appointments."
                  : "No past appointments found."}
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => setShowBookForm(true)}
                  className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Plus className="-ml-1 mr-2 h-5 w-5" />
                  Book Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Book Appointment Modal */}
      {showBookForm && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={() => setShowBookForm(false)}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={() => setShowBookForm(false)}
                >
                  <span className="sr-only">Close</span>
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div>
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Book a New Appointment
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Schedule an appointment with one of our healthcare professionals.
                    </p>
                  </div>
                </div>
              </div>

              <form className="mt-5" onSubmit={handleBookAppointment}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="appointment-type" className="block text-sm font-medium text-gray-700">
                      Appointment Type
                    </label>
                    <div className="mt-1 grid grid-cols-2 gap-3">
                      {appointmentTypes.map((type) => (
                        <div 
                          key={type.id}
                          onClick={() => setAppointmentType(type.id)}
                          className={`${appointmentType === type.id ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-300'} border rounded-lg p-4 flex flex-col items-center cursor-pointer hover:border-blue-500`}
                        >
                          <type.icon className={`h-6 w-6 ${appointmentType === type.id ? 'text-blue-600' : 'text-gray-400'}`} />
                          <span className="mt-2 block text-sm font-medium text-gray-900">{type.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                      Select Doctor
                    </label>
                    <select
                      id="doctor"
                      name="doctor"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                      value={selectedDoctor?.id || ''}
                      onChange={(e) => {
                        const doc = doctors.find(d => d.id === parseInt(e.target.value));
                        setSelectedDoctor(doc);
                      }}
                      required
                    >
                      <option value="">Select a doctor</option>
                      {doctors.map((doctor) => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name} - {doctor.specialty}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                        Date
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="date"
                          name="date"
                          id="date"
                          min={new Date().toISOString().split('T')[0]}
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                          value={selectedDate.toISOString().split('T')[0]}
                          onChange={(e) => setSelectedDate(new Date(e.target.value))}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                        Time
                      </label>
                      <select
                        id="time"
                        name="time"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)}
                        required
                      >
                        <option value="">Select a time</option>
                        {appointmentSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
                      Notes (Optional)
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="notes"
                        name="notes"
                        rows={3}
                        className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Any specific concerns or details you'd like to share with the doctor?"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:col-start-2 sm:text-sm"
                  >
                    Book Appointment
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                    onClick={() => setShowBookForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;