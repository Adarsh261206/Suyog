import React, { useState, useEffect } from 'react';
import {
  Users,
  Calendar,
  BarChart3,
  Search,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Trash2,
  Plus,
  Lock,
  LogOut,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { servicesData } from '../data/services';
import { packagesData } from '../data/packages';

export default function Admin() {
  useSEO({
    title: "Admin Panel & CRM – GISA Global Solutions",
    description: "Executive lead management, consultation bookings, and availability administration."
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkeyInput, setPasskeyInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('crm'); // 'crm' | 'bookings' | 'analytics' | 'settings'
  
  // Data State
  const [leads, setLeads] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [serviceFilter, setServiceFilter] = useState('ALL');
  const [isAddLeadModalOpen, setIsAddLeadModalOpen] = useState(false);

  // New Lead Form State
  const [newLead, setNewLead] = useState({
    fullName: '',
    email: '',
    whatsappNumber: '',
    businessName: '',
    professionalCategory: 'Professional & Consulting Services',
    interestedService: 'International Business Consultancy',
    interestedPackage: 'BASIC (Business Growth Essentials)',
    currentBusinessStage: 'Established Domestic Business',
    targetMarkets: 'United States, United Kingdom',
    message: ''
  });

  // Check session auth on mount
  useEffect(() => {
    const sessionAuth = sessionStorage.getItem('gisa_admin_auth');
    if (sessionAuth === 'true') {
      setIsAuthenticated(true);
    }
    loadData();
  }, []);

  const loadData = () => {
    const savedLeads = JSON.parse(localStorage.getItem('gisa_leads') || '[]');
    const savedBookings = JSON.parse(localStorage.getItem('gisa_consultations') || '[]');

    // If no leads exist, seed with sample reference data for Suyog Walke's test review
    if (savedLeads.length === 0) {
      const seedLeads = [
        {
          id: 'LEAD-101',
          fullName: 'Ananya Deshmukh',
          email: 'ananya@apexadvisory.in',
          whatsappNumber: '+91 9820123456',
          businessName: 'Apex Strategic Consultants',
          professionalCategory: 'Professional & Consulting Services',
          interestedService: 'International Business Consultancy',
          interestedPackage: 'ADVANCED (Business Growth & Development)',
          currentBusinessStage: 'Established Domestic Business',
          targetMarkets: 'United Kingdom, United States',
          message: 'Looking to expand our corporate governance advisory practice into London firms.',
          status: 'New',
          timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
          notes: 'High potential management consulting practice.'
        },
        {
          id: 'LEAD-102',
          fullName: 'Kunal Verma',
          email: 'kunal@vermatechsolutions.com',
          whatsappNumber: '+91 9833445566',
          businessName: 'Verma Tech Labs',
          professionalCategory: 'Information Technology & Digital Services',
          interestedService: 'International Client Acquisition',
          interestedPackage: 'BASIC (Business Growth Essentials)',
          currentBusinessStage: 'Ready to Export',
          targetMarkets: 'United Arab Emirates, Australia',
          message: 'Interested in acquiring B2B SaaS implementation clients in Dubai.',
          status: 'Clarity Session Scheduled',
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          notes: 'Clarity session agreed for Thursday 4:30 PM.'
        }
      ];
      localStorage.setItem('gisa_leads', JSON.stringify(seedLeads));
      setLeads(seedLeads);
    } else {
      setLeads(savedLeads);
    }

    if (savedBookings.length === 0) {
      const seedBookings = [
        {
          bookingId: 'GISA-CLARITY-991',
          fullName: 'Rajesh Kulkarni',
          email: 'rajesh@kulkarni-bim.com',
          phone: '+91 9819988776',
          companyName: 'Kulkarni BIM & Architecture Studio',
          consultationTopic: 'Business Clarity Session (Discovery & Guidance)',
          date: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
          timeSlot: '04:30 PM - 05:15 PM',
          timezone: 'Asia/Kolkata (IST)',
          status: 'Confirmed',
          timestamp: new Date().toISOString()
        }
      ];
      localStorage.setItem('gisa_consultations', JSON.stringify(seedBookings));
      setBookings(seedBookings);
    } else {
      setBookings(savedBookings);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Default passkey for Suyog Walke & authorized GISA admin team
    if (passkeyInput === 'gisa2025' || passkeyInput === 'admin' || passkeyInput === 'suyog') {
      setIsAuthenticated(true);
      sessionStorage.setItem('gisa_admin_auth', 'true');
      setAuthError('');
    } else {
      setAuthError('Incorrect passkey. Please check with Suyog Walke.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('gisa_admin_auth');
  };

  const updateLeadStatus = (leadId, newStatus) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus } : l);
    setLeads(updated);
    localStorage.setItem('gisa_leads', JSON.stringify(updated));
  };

  const updateLeadNotes = (leadId, notes) => {
    const updated = leads.map(l => l.id === leadId ? { ...l, notes } : l);
    setLeads(updated);
    localStorage.setItem('gisa_leads', JSON.stringify(updated));
  };

  const deleteLead = (leadId) => {
    if (window.confirm('Are you sure you want to remove this lead record?')) {
      const updated = leads.filter(l => l.id !== leadId);
      setLeads(updated);
      localStorage.setItem('gisa_leads', JSON.stringify(updated));
    }
  };

  const updateBookingStatus = (bookingId, status) => {
    const updated = bookings.map(b => b.bookingId === bookingId ? { ...b, status } : b);
    setBookings(updated);
    localStorage.setItem('gisa_consultations', JSON.stringify(updated));
  };

  const handleAddManualLead = (e) => {
    e.preventDefault();
    const leadRecord = {
      id: 'LEAD-' + Date.now(),
      ...newLead,
      status: 'New',
      timestamp: new Date().toISOString(),
      notes: 'Manually logged from phone / offline conversation'
    };
    const updated = [leadRecord, ...leads];
    setLeads(updated);
    localStorage.setItem('gisa_leads', JSON.stringify(updated));
    setIsAddLeadModalOpen(false);
    setNewLead({
      fullName: '',
      email: '',
      whatsappNumber: '',
      businessName: '',
      professionalCategory: 'Professional & Consulting Services',
      interestedService: 'International Business Consultancy',
      interestedPackage: 'BASIC (Business Growth Essentials)',
      currentBusinessStage: 'Established Domestic Business',
      targetMarkets: 'United States, United Kingdom',
      message: ''
    });
  };

  const exportLeadsCSV = () => {
    if (leads.length === 0) return alert('No leads to export.');
    const headers = ['ID', 'Full Name', 'Email', 'WhatsApp', 'Business Name', 'Category', 'Interested Service', 'Package', 'Target Markets', 'Status', 'Timestamp'];
    const rows = leads.map(l => [
      l.id,
      `"${l.fullName || ''}"`,
      `"${l.email || ''}"`,
      `"${l.whatsappNumber || ''}"`,
      `"${l.businessName || ''}"`,
      `"${l.professionalCategory || ''}"`,
      `"${l.interestedService || ''}"`,
      `"${l.interestedPackage || ''}"`,
      `"${l.targetMarkets || ''}"`,
      `"${l.status || 'New'}"`,
      `"${l.timestamp || ''}"`
    ]);
    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `gisa_leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered Leads
  const filteredLeads = leads.filter(l => {
    const matchesSearch =
      (l.fullName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.businessName || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.whatsappNumber || '').includes(searchQuery);
    const matchesStatus = statusFilter === 'ALL' || (l.status || 'New') === statusFilter;
    const matchesService = serviceFilter === 'ALL' || (l.interestedService || '') === serviceFilter;
    return matchesSearch && matchesStatus && matchesService;
  });

  // If not authenticated, render Login Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center px-4 py-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-2xl max-w-md w-full space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 bg-brand-emeraldTint text-brand-darkGreen rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <Lock size={26} />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-darkGreen">
              FOUNDER & EXECUTIVE ACCESS
            </span>
            <h2 className="text-2xl font-serif font-bold text-brand-darkCharcoal">
              GISA Admin & CRM Portal
            </h2>
            <p className="text-xs text-gray-500">
              Manage website leads, consultation calendar, and client pipelines.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Admin Passkey
              </label>
              <input
                type="password"
                placeholder="Enter admin passkey..."
                value={passkeyInput}
                onChange={(e) => setPasskeyInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-brand-darkGreen focus:ring-2 focus:ring-brand-darkGreen/10"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle size={12} /> {authError}
                </p>
              )}
              <p className="text-[11px] text-gray-400 mt-1">
                Default authorization: <code className="bg-gray-100 px-1 py-0.5 rounded text-gray-700">gisa2025</code>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-darkGreen hover:bg-[#137217] text-white py-3.5 rounded-xl font-bold text-sm shadow transition"
            >
              Access Admin Workspace
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-emeraldTint text-brand-darkGreen px-2.5 py-1 rounded-full">
              LIVE CRM & ADMIN PORTAL
            </span>
            <span className="text-xs text-gray-400 font-medium">Mumbai HQ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-brand-darkCharcoal mt-1">
            Suyog Walke • Executive Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddLeadModalOpen(true)}
            className="inline-flex items-center gap-1.5 bg-brand-darkGreen hover:bg-[#137217] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow transition"
          >
            <Plus size={15} />
            <span>Log Offline Lead</span>
          </button>

          <button
            onClick={exportLeadsCSV}
            className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-brand-darkGreen text-gray-700 text-xs font-semibold px-4 py-2.5 rounded-xl transition bg-white"
            title="Export to CSV / Excel"
          >
            <FileSpreadsheet size={15} className="text-green-600" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-red-600 p-2.5 rounded-xl border border-gray-200 hover:bg-red-50 transition"
            title="Logout"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>

      {/* KPI Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
            Total Website Inquiries
          </span>
          <div className="text-3xl font-serif font-extrabold text-brand-darkCharcoal">
            {leads.length}
          </div>
          <span className="text-[11px] text-brand-darkGreen font-semibold mt-1 block">
            {leads.filter(l => l.status === 'New').length} pending review
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
            Consultation Bookings
          </span>
          <div className="text-3xl font-serif font-extrabold text-brand-darkGreen">
            {bookings.length}
          </div>
          <span className="text-[11px] text-gray-500 font-medium mt-1 block">
            {bookings.filter(b => b.status === 'Confirmed').length} active calendar slots
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
            Clarity Sessions
          </span>
          <div className="text-3xl font-serif font-extrabold text-brand-darkCharcoal">
            {leads.filter(l => l.status === 'Clarity Session Scheduled').length}
          </div>
          <span className="text-[11px] text-blue-600 font-semibold mt-1 block">
            Discovery pipeline
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
            Primary Target Market
          </span>
          <div className="text-xl font-serif font-bold text-brand-darkCharcoal truncate">
            US, UK & UAE
          </div>
          <span className="text-[11px] text-gray-500 font-medium mt-1 block">
            Most requested corridors
          </span>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200 gap-6 text-sm font-semibold">
        <button
          onClick={() => setActiveTab('crm')}
          className={`pb-3 transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'crm'
              ? 'border-b-2 border-brand-darkGreen text-brand-darkGreen font-bold'
              : 'text-gray-500 hover:text-brand-darkCharcoal'
          }`}
        >
          <Users size={16} />
          <span>Leads & CRM ({leads.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('bookings')}
          className={`pb-3 transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'bookings'
              ? 'border-b-2 border-brand-darkGreen text-brand-darkGreen font-bold'
              : 'text-gray-500 hover:text-brand-darkCharcoal'
          }`}
        >
          <Calendar size={16} />
          <span>Consultation Calendar ({bookings.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('analytics')}
          className={`pb-3 transition cursor-pointer flex items-center gap-2 ${
            activeTab === 'analytics'
              ? 'border-b-2 border-brand-darkGreen text-brand-darkGreen font-bold'
              : 'text-gray-500 hover:text-brand-darkCharcoal'
          }`}
        >
          <BarChart3 size={16} />
          <span>Analytics & Trends</span>
        </button>
      </div>

      {/* TAB 1: CRM & LEADS MANAGEMENT */}
      {activeTab === 'crm' && (
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs flex flex-col md:flex-row gap-3 items-center justify-between">
            <div className="relative w-full md:w-80">
              <Search size={15} className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads by name, company, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:outline-none focus:border-brand-darkGreen"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white font-medium text-gray-700"
              >
                <option value="ALL">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Clarity Session Scheduled">Clarity Session Scheduled</option>
                <option value="Proposal Sent">Proposal Sent</option>
                <option value="Won / Active">Won / Active</option>
                <option value="Archived">Archived</option>
              </select>

              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-xl border border-gray-200 bg-white font-medium text-gray-700 max-w-[200px] truncate"
              >
                <option value="ALL">All Services</option>
                {servicesData.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-xs overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 uppercase tracking-wider font-bold bg-brand-lightBg">
                  <th className="py-3.5 px-4">Lead / Company</th>
                  <th className="py-3.5 px-4">Contact</th>
                  <th className="py-3.5 px-4">Interest & Corridor</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4">Notes</th>
                  <th className="py-3.5 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-gray-400">
                      No leads match your search criteria.
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50/70 transition">
                      <td className="py-4 px-4 align-top">
                        <strong className="text-brand-darkCharcoal text-sm block font-serif">
                          {lead.fullName}
                        </strong>
                        <span className="text-gray-500 font-medium">{lead.businessName}</span>
                        <span className="block text-[10px] text-gray-400 mt-0.5">
                          {new Date(lead.timestamp).toLocaleDateString()}
                        </span>
                      </td>

                      <td className="py-4 px-4 align-top space-y-1">
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <Phone size={12} className="text-brand-darkGreen" />
                          <span>{lead.whatsappNumber}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Mail size={12} className="text-brand-darkGreen" />
                          <span className="truncate max-w-[150px]">{lead.email}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4 align-top">
                        <span className="font-semibold text-brand-darkGreen block">
                          {lead.interestedService || lead.interestedPackage || 'General Expansion'}
                        </span>
                        <span className="text-gray-500 text-[11px] block mt-0.5">
                          Target: {lead.targetMarkets || 'Global'}
                        </span>
                      </td>

                      <td className="py-4 px-4 align-top">
                        <select
                          value={lead.status || 'New'}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                          className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
                            lead.status === 'Won / Active' ? 'bg-green-100 text-green-800 border-green-200' :
                            lead.status === 'Clarity Session Scheduled' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                            lead.status === 'Proposal Sent' ? 'bg-purple-100 text-purple-800 border-purple-200' :
                            lead.status === 'Contacted' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                            'bg-gray-100 text-gray-700 border-gray-200'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Clarity Session Scheduled">Clarity Session</option>
                          <option value="Proposal Sent">Proposal Sent</option>
                          <option value="Won / Active">Won / Active</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </td>

                      <td className="py-4 px-4 align-top max-w-[200px]">
                        <input
                          type="text"
                          defaultValue={lead.notes || ''}
                          onBlur={(e) => updateLeadNotes(lead.id, e.target.value)}
                          placeholder="Add private note..."
                          className="w-full text-[11px] p-1.5 rounded-lg border border-transparent hover:border-gray-200 focus:border-brand-darkGreen focus:bg-white"
                        />
                      </td>

                      <td className="py-4 px-4 align-top text-right space-x-1 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${(lead.whatsappNumber || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                            `Hello ${lead.fullName}, thank you for connecting with GISA Global Solutions LLP. Suyog Walke would like to schedule our discussion.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#1ebe5d] inline-flex items-center"
                          title="Open WhatsApp chat"
                        >
                          <MessageCircle size={14} />
                        </a>
                        <a
                          href={`mailto:${lead.email}?subject=GISA Global Solutions - International Expansion Discussion`}
                          className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 inline-flex items-center"
                          title="Send Email"
                        >
                          <Mail size={14} />
                        </a>
                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-1.5 rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 inline-flex items-center"
                          title="Delete Lead"
                        >
                          <Trash2 size={14} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CONSULTATION BOOKINGS */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold font-serif text-brand-darkCharcoal">
                  Scheduled Consultation Appointments
                </h3>
                <p className="text-xs text-gray-500">
                  Appointments booked through the /book-consultation calendar.
                </p>
              </div>
            </div>

            <div className="divide-y divide-gray-100 text-xs">
              {bookings.length === 0 ? (
                <p className="py-6 text-center text-gray-400">No scheduled appointments yet.</p>
              ) : (
                bookings.map((booking) => (
                  <div key={booking.bookingId} className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] bg-brand-emeraldTint text-brand-darkGreen font-bold px-2 py-0.5 rounded">
                          {booking.bookingId}
                        </span>
                        <strong className="text-sm font-serif font-bold text-brand-darkCharcoal">
                          {booking.fullName} ({booking.companyName})
                        </strong>
                      </div>
                      <p className="text-gray-600">
                        <strong>Topic:</strong> {booking.consultationTopic}
                      </p>
                      <p className="text-gray-500 text-[11px] flex items-center gap-3">
                        <span className="flex items-center gap-1 font-semibold text-brand-darkGreen">
                          <Calendar size={12} /> {booking.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {booking.timeSlot} ({booking.timezone})
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <select
                        value={booking.status || 'Confirmed'}
                        onChange={(e) => updateBookingStatus(booking.bookingId, e.target.value)}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 bg-white"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Rescheduled">Rescheduled</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>

                      <a
                        href={`https://wa.me/${(booking.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                          `Hello ${booking.fullName}, confirming your consultation appointment with Suyog Walke on ${booking.date} at ${booking.timeSlot}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d] transition"
                        title="Send WhatsApp Confirmation"
                      >
                        <MessageCircle size={14} />
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: ANALYTICS & TRENDS */}
      {activeTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
            <h4 className="text-sm font-bold font-serif text-brand-darkCharcoal">
              Inquiries by Core Service Category
            </h4>
            <div className="space-y-3 text-xs">
              {servicesData.map(s => {
                const count = leads.filter(l => l.interestedService === s.title).length;
                const pct = leads.length > 0 ? Math.round((count / leads.length) * 100) : 0;
                return (
                  <div key={s.id} className="space-y-1">
                    <div className="flex justify-between text-gray-700">
                      <span>{s.title}</span>
                      <span className="font-bold">{count} ({pct}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-darkGreen" style={{ width: `${Math.max(pct, 8)}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs space-y-4">
            <h4 className="text-sm font-bold font-serif text-brand-darkCharcoal">
              Package Inquiries Distribution
            </h4>
            <div className="space-y-3 text-xs">
              {packagesData.map(p => {
                const count = leads.filter(l => (l.interestedPackage || '').includes(p.name)).length;
                const pct = leads.length > 0 ? Math.round((count / leads.length) * 100) : 0;
                return (
                  <div key={p.id} className="space-y-1">
                    <div className="flex justify-between text-gray-700">
                      <span>{p.name} ({p.subtitle})</span>
                      <span className="font-bold">{count} ({pct}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-lightGreen" style={{ width: `${Math.max(pct, 12)}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Manual Lead Modal */}
      {isAddLeadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darkCharcoal/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <h3 className="text-base font-bold font-serif text-brand-darkCharcoal">
                Log Offline / Phone Lead
              </h3>
              <button
                onClick={() => setIsAddLeadModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddManualLead} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={newLead.fullName}
                  onChange={(e) => setNewLead({ ...newLead, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold text-gray-700 mb-1">WhatsApp</label>
                  <input
                    type="text"
                    required
                    value={newLead.whatsappNumber}
                    onChange={(e) => setNewLead({ ...newLead, whatsappNumber: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <label className="block font-bold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-200"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Company / Firm Name</label>
                <input
                  type="text"
                  required
                  value={newLead.businessName}
                  onChange={(e) => setNewLead({ ...newLead, businessName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Interested Service</label>
                <select
                  value={newLead.interestedService}
                  onChange={(e) => setNewLead({ ...newLead, interestedService: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-gray-200 bg-white"
                >
                  {servicesData.map(s => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Target Markets</label>
                <input
                  type="text"
                  value={newLead.targetMarkets}
                  onChange={(e) => setNewLead({ ...newLead, targetMarkets: e.target.value })}
                  placeholder="e.g. US, UK, UAE"
                  className="w-full p-2.5 rounded-xl border border-gray-200"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-brand-darkGreen text-white font-bold py-3 rounded-xl hover:bg-[#137217] transition"
                >
                  Save Lead to CRM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

