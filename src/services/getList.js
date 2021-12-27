/** @format */

const URL_DOMINIO = "https://mfwkweb-api.clarovideo.net/";
const URL_COMPLEMENT_LIST =
  "api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5hqq76r3g6sg4jb90l38us52";
const NAME_MODULE = "listador-infinito";
const TYPE_MODULE = "listadoinfinito";

const NAME_CARROUSEL = "carrousel";

const getUrlList = async (url) => {
  try {
    const res = await fetch(url);

    const {
      response: {
        modules: { module },
      },
    } = await res.json();
    return { errors: false, module };
  } catch (error) {
    return { errors: true };
  }
};

const getList = async (url) => {
  try {
    const res = await fetch(url);

    const {
      response: { groups },
    } = await res.json();
    return { errors: false, groups };
  } catch (error) {
    return { errors: true };
  }
};

export const fetchMovies = async () => {
  let urlRequest = `${URL_DOMINIO}/services/cms/level?api_version=v5.86&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=9s5h%20%20qq76r3g6sg4jb90l38us52&isCacheable=true&node=gen_accion&domain=https%3A%2F%2Fmfwkweb-api.clarovideo.net%2F&origin=https%%20%203A%2F%2Fwww.clarovideo.com%2F&user_id=22822863`;

  const response = await getUrlList(urlRequest);

  if (!response.errors) {
    const modules = response.module.filter(
      ({ name, type }) => name === NAME_MODULE && type === TYPE_MODULE
    );

    const {
      components: { component },
    } = modules[0] ?? {
      components: { component: [] },
    };

    const properties = component.filter(({ name }) => name === NAME_CARROUSEL);

    const {
      properties: { url },
    } = properties[0] ?? "";

    urlRequest = `${URL_DOMINIO}${url}&${URL_COMPLEMENT_LIST}`;

    const responseList = await getList(urlRequest);
    if (!responseList.errors) return responseList.groups;
    else return "El catálogo no está disponible";
  } else return "Hubo un error en la aplicación";
};
