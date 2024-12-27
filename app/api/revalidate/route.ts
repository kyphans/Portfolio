
// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { path } = req.query;

//   console.log('path handler:', path);

//   if (!path) {
//     return res.status(400).json({ message: 'Path query parameter is required' });
//   }

//   const revalidateTarget = path as string; // Define a constant for the path

//   try {
//     await revalidatePath(revalidateTarget);
//     return res.status(200).json({ message: `Revalidated ${revalidateTarget}` });
//   } catch (error) {
//     return res.status(500).json({ message: 'Error revalidating', error });
//   }
// }

import type { NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache';

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')

  console.log('path handler:', path);

  if (path) {
    revalidatePath(path, 'layout')
    return Response.json({ revalidated: true, now: Date.now() })
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  })
}