import axios from "axios";

async function getData() {
    const res = await axios.get('https://69e8cff255d62f347979e723.mockapi.io/name/fast-food')
    return res.data
}
export {getData}