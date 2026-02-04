import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { Toaster } from '@/app/components/ui/sonner';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProtectedRoute from '@/components/ProtectedRoute';

// Public Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Activities from '@/pages/Activities';
import Gallery from '@/pages/Gallery';
import Notices from '@/pages/Notices';
import Recruit from '@/pages/Recruit';
import Contact from '@/pages/Contact';

// Portal Pages (Member only)
import PortalDashboard from '@/pages/portal/PortalDashboard';
import PortalCalendar from '@/pages/portal/PortalCalendar';
import PortalResources from '@/pages/portal/PortalResources';
import PortalEquipment from '@/pages/portal/PortalEquipment';

// Admin Pages (Exec only)
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminNotices from '@/pages/admin/AdminNotices';
import AdminMinutes from '@/pages/admin/AdminMinutes';
import AdminDepartments from '@/pages/admin/AdminDepartments';
import AdminUsers from '@/pages/admin/AdminUsers';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-1">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/history" element={<About />} />
              <Route path="/about/organization" element={<About />} />
              <Route path="/activities/projects" element={<Activities />} />
              <Route path="/activities/study" element={<Activities />} />
              <Route path="/activities/external" element={<Activities />} />
              <Route path="/archive/gallery" element={<Gallery />} />
              <Route path="/archive/posts" element={<Activities />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/notices/:id" element={<Notices />} />
              <Route path="/recruit" element={<Recruit />} />
              <Route path="/contact" element={<Contact />} />

              {/* Portal Routes (Member only) */}
              <Route
                path="/portal"
                element={
                  <ProtectedRoute requireAuth={true}>
                    <PortalDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portal/calendar"
                element={
                  <ProtectedRoute requireAuth={true}>
                    <PortalCalendar />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portal/resources"
                element={
                  <ProtectedRoute requireAuth={true}>
                    <PortalResources />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/portal/equipment"
                element={
                  <ProtectedRoute requireAuth={true}>
                    <PortalEquipment />
                  </ProtectedRoute>
                }
              />

              {/* Admin Routes (Exec only) */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute
                    requireAuth={true}
                    requiredRoles={['exec-core', 'exec-finance', 'exec-promo', 'exec-plan', 'exec-equipment', 'exec-external']}
                  >
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/notices"
                element={
                  <ProtectedRoute
                    requireAuth={true}
                    requiredRoles={['exec-core', 'exec-promo', 'exec-plan']}
                  >
                    <AdminNotices />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/minutes"
                element={
                  <ProtectedRoute
                    requireAuth={true}
                    requiredRoles={['exec-core', 'exec-finance', 'exec-promo', 'exec-plan', 'exec-equipment', 'exec-external']}
                  >
                    <AdminMinutes />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/departments"
                element={
                  <ProtectedRoute
                    requireAuth={true}
                    requiredRoles={['exec-core', 'exec-finance', 'exec-promo', 'exec-plan', 'exec-equipment', 'exec-external']}
                  >
                    <AdminDepartments />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/users"
                element={
                  <ProtectedRoute
                    requireAuth={true}
                    requiredRoles={['exec-core']}
                  >
                    <AdminUsers />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}