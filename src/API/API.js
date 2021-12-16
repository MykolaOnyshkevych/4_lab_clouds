export const getParcels = async () => {
  try {
    const result = await fetch(
      "http://20.67.150.219/api/gettrigger"

    );
    const data = await result.json();
    return data;

  } catch (e) {
    console.log(e);
  }
};

