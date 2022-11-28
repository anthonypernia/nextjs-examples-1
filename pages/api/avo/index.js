import Database from "@database"

const allAvos = async (request, response) => {
    const db = Database;
    const allEntries = await db.getAll();
    const length = allEntries.length;
    response.statusCode = 200;
    response.status(200).json({ data: allEntries, length });
}


export default allAvos