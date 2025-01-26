import React, { useState } from 'react';
import { Search, Filter, Download, Users, ChevronDown, ChevronUp, Calendar, Mail, Phone, MapPin } from 'lucide-react';

// Mock data for demonstration
const mockLeads = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah.j@example.com', 
    phone: '(555) 123-4567',
    location: 'New York, NY',
    source: 'Facebook', 
    status: 'New', 
    date: '2024-03-10',
    notes: 'Interested in enterprise plan',
    lastContact: '2024-03-09'
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'michael.c@example.com', 
    phone: '(555) 234-5678',
    location: 'San Francisco, CA',
    source: 'Google', 
    status: 'Contacted', 
    date: '2024-03-09',
    notes: 'Follow up next week',
    lastContact: '2024-03-08'
  },
  { 
    id: 3, 
    name: 'Emma Wilson', 
    email: 'emma.w@example.com', 
    phone: '(555) 345-6789',
    location: 'Chicago, IL',
    source: 'Manual', 
    status: 'Qualified', 
    date: '2024-03-08',
    notes: 'Ready for demo',
    lastContact: '2024-03-07'
  },
  { 
    id: 4, 
    name: 'James Rodriguez', 
    email: 'james.r@example.com', 
    phone: '(555) 456-7890',
    location: 'Miami, FL',
    source: 'Facebook', 
    status: 'New', 
    date: '2024-03-07',
    notes: 'Requesting pricing info',
    lastContact: '2024-03-06'
  },
  { 
    id: 5, 
    name: 'Lisa Thompson', 
    email: 'lisa.t@example.com', 
    phone: '(555) 567-8901',
    location: 'Austin, TX',
    source: 'Google', 
    status: 'Contacted', 
    date: '2024-03-06',
    notes: 'Schedule follow-up call',
    lastContact: '2024-03-05'
  },
];

const LeadDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSource, setSelectedSource] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [expandedLead, setExpandedLead] = useState<number | null>(null);

  const filteredLeads = mockLeads
    .filter(lead => {
      const matchesSearch = 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSource = selectedSource === 'All' || lead.source === selectedSource;
      const matchesStatus = selectedStatus === 'All' || lead.status === selectedStatus;
      return matchesSearch && matchesSource && matchesStatus;
    })
    .sort((a, b) => {
      const direction = sortDirection === 'asc' ? 1 : -1;
      if (sortField === 'date') {
        return direction * (new Date(b.date).getTime() - new Date(a.date).getTime());
      }
      return direction * (a[sortField] < b[sortField] ? -1 : 1);
    });

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'Facebook':
        return 'bg-blue-100 text-blue-800';
      case 'Google':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New':
        return 'bg-purple-100 text-purple-800';
      case 'Contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'Qualified':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ field }: { field: string }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: 'Total Leads', value: mockLeads.length, color: 'bg-blue-500' },
            { label: 'New Leads', value: mockLeads.filter(l => l.status === 'New').length, color: 'bg-purple-500' },
            { label: 'Contacted', value: mockLeads.filter(l => l.status === 'Contacted').length, color: 'bg-yellow-500' },
            { label: 'Qualified', value: mockLeads.filter(l => l.status === 'Qualified').length, color: 'bg-emerald-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} h-12 w-12 rounded-full flex items-center justify-center`}>
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-indigo-600" />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Lead Dashboard</h1>
                <p className="text-sm text-gray-500">Manage and track your leads in real-time</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All Sources</option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Manual">Manual</option>
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
            </select>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('name')}
                  >
                    <div className="flex items-center gap-2">
                      Name
                      <SortIcon field="name" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th 
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort('date')}
                  >
                    <div className="flex items-center gap-2">
                      Date
                      <SortIcon field="date" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <React.Fragment key={lead.id}>
                    <tr 
                      className="hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => setExpandedLead(expandedLead === lead.id ? null : lead.id)}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Mail className="h-4 w-4" />
                            {lead.email}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Phone className="h-4 w-4" />
                            {lead.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSourceColor(lead.source)}`}>
                          {lead.source}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          {new Date(lead.date).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                    {expandedLead === lead.id && (
                      <tr className="bg-gray-50">
                        <td colSpan={5} className="px-6 py-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Additional Information</h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <MapPin className="h-4 w-4" />
                                  {lead.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-500">
                                  <Calendar className="h-4 w-4" />
                                  Last Contact: {new Date(lead.lastContact).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900 mb-2">Notes</h4>
                              <p className="text-sm text-gray-500">{lead.notes}</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDashboard;