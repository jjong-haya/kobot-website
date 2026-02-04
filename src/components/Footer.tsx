import { Link } from 'react-router-dom';
import { Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4A7C59] to-[#5A8F6A] text-white">
      <div className="container mx-auto px-8 py-16 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About KOBOT */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="size-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="font-bold text-xl text-white">KOBOT</h3>
                <p className="text-white/80 text-sm">국민대학교 로봇 동아리</p>
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-sm">
              로봇 공학과 기술에 대한 열정으로 모인<br />
              국민대학교 대표 로봇 동아리입니다.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">연락처</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a 
                  href="mailto:kobot@kookmin.ac.kr" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="size-5" />
                  </div>
                  <span>kobot@kookmin.ac.kr</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/90">
                <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div>서울시 성북구 정릉로 77</div>
                  <div className="text-white/70">국민대학교</div>
                </div>
              </li>
              <li>
                <a 
                  href="tel:02-910-4114" 
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
                >
                  <div className="size-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Phone className="size-5" />
                  </div>
                  <span>02-910-4114</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">소셜 미디어</h3>
            <p className="text-white/90 text-sm mb-6 leading-relaxed">
              KOBOT의 다양한 활동과 소식을<br />
              소셜 미디어에서 만나보세요!
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="size-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
                aria-label="Instagram"
              >
                <Instagram className="size-6 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="#" 
                className="size-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all group"
                aria-label="YouTube"
              >
                <Youtube className="size-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {new Date().getFullYear()} KOBOT. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/about" className="hover:text-white transition-colors">
                동아리 소개
              </Link>
              <Link to="/recruit" className="hover:text-white transition-colors">
                신입 모집
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
