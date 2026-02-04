import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/app/components/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LogIn, 
  LogOut, 
  User, 
  Shield, 
  Menu, 
  Users, 
  ChevronDown,
  Building2,
  Trophy,
  Settings,
  Wrench,
  BookOpen,
  Award,
  Camera,
  FileText,
  LayoutDashboard,
  Calendar,
  FolderOpen,
  Package,
  Bell,
  ClipboardList,
  Briefcase,
  UserCog
} from 'lucide-react';
import { useState } from 'react';
import LoginDialog from './LoginDialog';

export default function Navigation() {
  const { user, isAuthenticated, logout, hasRole } = useAuth();
  const location = useLocation();
  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const isExec = hasRole(['exec-core', 'exec-finance', 'exec-promo', 'exec-plan', 'exec-equipment', 'exec-external']);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="size-10 bg-gradient-to-br from-[#4A7C59] to-[#5A8F6A] rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 leading-none">KOBOT</span>
                <span className="text-[10px] text-gray-500 leading-none">국민대학교 로봇 동아리</span>
              </div>
            </Link>

            {/* Main Navigation */}
            <NavigationMenu className="hidden lg:flex" viewport={false}>
              <NavigationMenuList>
                {/* 홈 */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/" 
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        location.pathname === '/' 
                          ? 'bg-[#4A7C59] text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      홈
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 동아리 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 data-[state=open]:bg-gray-100">
                    동아리
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/about" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Building2 className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">소개</div>
                              <p className="text-xs text-gray-500 mt-0.5">KOBOT 동아리 소개</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/about/history" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Trophy className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">연혁/성과</div>
                              <p className="text-xs text-gray-500 mt-0.5">동아리의 역사와 수상</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/about/organization" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Settings className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">운영 방식</div>
                              <p className="text-xs text-gray-500 mt-0.5">조직 구조 및 활동 방식</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 활동 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 data-[state=open]:bg-gray-100">
                    활동
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/activities/projects" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Wrench className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">프로젝트</div>
                              <p className="text-xs text-gray-500 mt-0.5">로봇 제작 프로젝트</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/activities/study" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <BookOpen className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">스터디/세미나</div>
                              <p className="text-xs text-gray-500 mt-0.5">정기 학습 모임</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/activities/external" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Award className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">대회·대외활동</div>
                              <p className="text-xs text-gray-500 mt-0.5">경진대회 및 외부 행사</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 아카이브 */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-gray-900 data-[state=open]:bg-gray-100">
                    아카이브
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/archive/gallery" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <Camera className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">갤러리</div>
                              <p className="text-xs text-gray-500 mt-0.5">활동 사진 모음</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li className="border-b border-gray-100 last:border-0">
                        <NavigationMenuLink asChild>
                          <Link 
                            to="/archive/posts" 
                            className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-[#F5F9F7] group"
                          >
                            <FileText className="size-5 text-[#4A7C59] group-hover:scale-110 transition-transform" />
                            <div className="flex-1">
                              <div className="text-sm font-semibold text-gray-900 group-hover:text-[#4A7C59]">활동 기록</div>
                              <p className="text-xs text-gray-500 mt-0.5">과거 활동 기록 보관</p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 공지 */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/notices" 
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        location.pathname === '/notices' 
                          ? 'bg-[#4A7C59] text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      공지
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 모집 */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link 
                      to="/recruit" 
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                        location.pathname === '/recruit' 
                          ? 'bg-[#4A7C59] text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                      }`}
                    >
                      모집
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                {/* 내부포털 - 로그인 시에만 표시 */}
                {isAuthenticated && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#2563EB] hover:text-[#1D4ED8] data-[state=open]:bg-blue-50">
                      내부포털
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/portal" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-blue-50 group"
                            >
                              <LayoutDashboard className="size-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#2563EB]">대시보드</div>
                                <p className="text-xs text-gray-500 mt-0.5">내부 포털 홈</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/portal/calendar" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-blue-50 group"
                            >
                              <Calendar className="size-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#2563EB]">내부 캘린더</div>
                                <p className="text-xs text-gray-500 mt-0.5">내부 일정 관리</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/portal/resources" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-blue-50 group"
                            >
                              <FolderOpen className="size-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#2563EB]">자료실</div>
                                <p className="text-xs text-gray-500 mt-0.5">학습 자료 공유</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/portal/equipment" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-blue-50 group"
                            >
                              <Package className="size-5 text-[#2563EB] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#2563EB]">장비 대여</div>
                                <p className="text-xs text-gray-500 mt-0.5">장비 예약 시스템</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}

                {/* 운영진 - 운영진 권한이 있을 때만 표시 */}
                {isExec && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-[#9333EA] hover:text-[#7E22CE] data-[state=open]:bg-purple-50">
                      운영진
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="w-64 p-2 bg-white rounded-xl shadow-lg border border-gray-200">
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/admin" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-purple-50 group"
                            >
                              <LayoutDashboard className="size-5 text-[#9333EA] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#9333EA]">관리 대시보드</div>
                                <p className="text-xs text-gray-500 mt-0.5">운영진 홈</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/admin/notices" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-purple-50 group"
                            >
                              <Bell className="size-5 text-[#9333EA] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#9333EA]">공지 발행</div>
                                <p className="text-xs text-gray-500 mt-0.5">공지사항 작성</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/admin/minutes" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-purple-50 group"
                            >
                              <ClipboardList className="size-5 text-[#9333EA] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#9333EA]">회의록</div>
                                <p className="text-xs text-gray-500 mt-0.5">회의 기록 관리</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        <li className="border-b border-gray-100 last:border-0">
                          <NavigationMenuLink asChild>
                            <Link 
                              to="/admin/departments" 
                              className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-purple-50 group"
                            >
                              <Briefcase className="size-5 text-[#9333EA] group-hover:scale-110 transition-transform" />
                              <div className="flex-1">
                                <div className="text-sm font-semibold text-gray-900 group-hover:text-[#9333EA]">직책별 업무</div>
                                <p className="text-xs text-gray-500 mt-0.5">부서별 업무 관리</p>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                        {hasRole(['exec-core']) && (
                          <li className="border-b border-gray-100 last:border-0">
                            <NavigationMenuLink asChild>
                              <Link 
                                to="/admin/users" 
                                className="flex items-center gap-3 px-4 py-3 leading-none no-underline outline-none transition-all hover:bg-purple-50 group"
                              >
                                <UserCog className="size-5 text-[#9333EA] group-hover:scale-110 transition-transform" />
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-gray-900 group-hover:text-[#9333EA]">사용자 관리</div>
                                  <p className="text-xs text-gray-500 mt-0.5">회원 권한 관리</p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        )}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right side - Login/User Menu */}
            <div className="flex items-center gap-3">
              <Link to="/contact">
                <Button variant="ghost" size="sm" className="rounded-lg hover:bg-gray-100">문의</Button>
              </Link>

              {!isAuthenticated ? (
                <Button 
                  onClick={() => setShowLoginDialog(true)} 
                  size="sm" 
                  className="bg-[#4A7C59] hover:bg-[#3D6B4A] text-white rounded-lg shadow-sm"
                >
                  <LogIn className="size-4 mr-2" />
                  로그인
                </Button>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="rounded-lg border-gray-300 hover:bg-gray-50">
                      <User className="size-4 mr-2" />
                      {user?.name}
                      <ChevronDown className="size-3 ml-1 opacity-50" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-60 rounded-xl shadow-lg border border-gray-200">
                    <div className="px-3 py-2.5 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{user?.email}</p>
                      {user?.position && (
                        <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded-md bg-purple-100 text-purple-700">
                          <Shield className="size-3 mr-1" />
                          <span className="text-xs font-medium">{user?.position}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-1">
                      <DropdownMenuItem asChild>
                        <Link to="/portal" className="cursor-pointer rounded-lg px-3 py-2 hover:bg-blue-50 hover:text-[#2563EB]">
                          <Users className="size-4 mr-2" />
                          내부포털
                        </Link>
                      </DropdownMenuItem>
                      {isExec && (
                        <DropdownMenuItem asChild>
                          <Link to="/admin" className="cursor-pointer rounded-lg px-3 py-2 hover:bg-purple-50 hover:text-[#9333EA]">
                            <Shield className="size-4 mr-2" />
                            운영진 관리
                          </Link>
                        </DropdownMenuItem>
                      )}
                    </div>
                    <DropdownMenuSeparator />
                    <div className="p-1">
                      <DropdownMenuItem 
                        onClick={logout} 
                        className="cursor-pointer text-red-600 rounded-lg px-3 py-2 hover:bg-red-50 focus:bg-red-50 focus:text-red-700"
                      >
                        <LogOut className="size-4 mr-2" />
                        로그아웃
                      </DropdownMenuItem>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          </div>
        </div>
      </header>

      <LoginDialog open={showLoginDialog} onOpenChange={setShowLoginDialog} />
    </>
  );
}