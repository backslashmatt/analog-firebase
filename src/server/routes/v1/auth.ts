import { defineEventHandler, readBody, sendError, H3Error } from 'h3';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { send } from 'vite';

export default defineEventHandler(async event => {
  const { email, password } = await readBody(event);
  if (!email || !password) {
    return sendError(event, {
      statusCode: 400,
      message: 'Missing email or password',
      data: { message: 'Missing email or password' },
    } as H3Error);
  }
  const auth = getAuth();
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return sendError(event, e as H3Error);
  }
});
