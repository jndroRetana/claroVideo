/** @format */

export const getDetails = async (id) => {
  try {
    const resp = await fetch(
      `https://mfwkweb-api.clarovideo.net/services/content/data?device_id=web&device_category=web&device_model=web&device_type=web&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.86&region=mexico&HKS=9s5hqq76r3g6sg4jb90l38us52&user_id=22822863&group_id=${id}`
    );

    const {
      response: {
        group: { common },
      },
    } = await resp.json();

    return { error: false, data: common };
  } catch (error) {
    return { error: true };
  }
};
