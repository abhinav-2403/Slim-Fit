
export const exerciseOptions = {
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6004da93ebmsha19b0f65a1f655fp158937jsn346b9e233fd8',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6004da93ebmsha19b0f65a1f655fp158937jsn346b9e233fd8',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };