import { Response } from '@/libs/api/local/Response';
import { getPrograms } from '@/libs/api/notion/NotionClient';
 
export async function POST() {
  try {
    const programs = await getPrograms();

    return Response.success({ programs });
  } catch (e: any) {
    console.error(e);
    return Response.failed(e.message);
  }
}