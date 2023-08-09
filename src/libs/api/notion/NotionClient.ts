import { Config } from "@/configs/config";
import { Client } from "@notionhq/client";

export const getPrograms = async () => {
  const notion = new Client({ auth: Config.NOTION_TOKEN })

  const page = await notion.databases.query({
    database_id: Config.NOTION_DATABASE_ID
  });

  const properties = page.results.map((result: any) => {
    const description: string = result.properties['Deskripsi']['rich_text'][0]['text']['content'];
    const donationTarget: number = result.properties['Target Donasi']['number'];
    const donationMinimum: number = result.properties['Minimum Donasi']['number'];
    const completeDate: string = result.properties['Tanggal Selesai']['date']['start'];
    const donationReceiver: string = result.properties['Penerima Manfaat']['select']['name'];
    const completeIf: string = result.properties['Selesai Jika']['select']['name'];
    const name: string = result.properties['Nama Program']['title'][0]['text']['content'];
    
    // const cover: string = result.properties['Gambar']['files'][0]['external']['url'];
    let cover = '';
    const coverObject = result.properties['Gambar']['files'][0];

    if (coverObject['type'] == 'file') {
      cover = coverObject['file']['url']
    } else {
      cover = coverObject['external']['url'];
    }
    

    return {
      name,
      cover,
      description,
      completeIf,
      donationTarget,
      donationMinimum,
      completeDate,
      donationReceiver
    };
  })

  // const listUsersResponse = await notion.users.list({})

  return properties;
}
