import 'next';

import { useSession } from 'next-auth/react';
import { render, screen } from '@lib/testing';
import IndexPage from './index.page';

jest.mock('next-auth/react');

const useSessionFn = useSession as jest.Mock;

describe('IndexPage', () => {
  it('shows sign in button when unauthenticated', async () => {
    useSessionFn.mockReturnValue({
      status: 'unauthenticated',
      data: null,
    });

    render(<IndexPage />);
    screen.queryByRole('button', { name: 'Sign in' });
  });

  it('shows sign out button when authenticated', async () => {
    useSessionFn.mockReturnValue({
      status: 'authenticated',
      data: null,
    });

    render(<IndexPage />);
    screen.queryByRole('button', { name: 'Sign out' });
  });
});
