import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/app/components/ui/dialog';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
      toast.success('로그인 성공!');
      onOpenChange(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (userEmail: string) => {
    setEmail(userEmail);
    setPassword('password');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>KOBOT 로그인</DialogTitle>
          <DialogDescription>
            국민대학교 이메일로 로그인하세요
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">이메일</Label>
            <Input
              id="email"
              type="email"
              placeholder="your-email@kookmin.ac.kr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">비밀번호</Label>
            <Input
              id="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? '로그인 중...' : '로그인'}
          </Button>
        </form>

        <div className="mt-6 border-t pt-4">
          <p className="text-xs text-gray-500 mb-3">데모 계정 (빠른 로그인):</p>
          <div className="space-y-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-xs"
              onClick={() => quickLogin('member@kookmin.ac.kr')}
              type="button"
            >
              일반 부원 (member@kookmin.ac.kr)
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-xs"
              onClick={() => quickLogin('president@kookmin.ac.kr')}
              type="button"
            >
              회장 (president@kookmin.ac.kr)
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-xs"
              onClick={() => quickLogin('finance@kookmin.ac.kr')}
              type="button"
            >
              총무 (finance@kookmin.ac.kr)
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-xs"
              onClick={() => quickLogin('promo@kookmin.ac.kr')}
              type="button"
            >
              홍보팀장 (promo@kookmin.ac.kr)
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
