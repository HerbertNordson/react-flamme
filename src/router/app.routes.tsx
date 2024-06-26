import { Routes as Switch, Route } from "react-router-dom";
import {
  Login,
  Cart,
  AddProduct,
  Catalog,
  Profile,
  ProductClient,
  RegisterInformation,
  HomeBudgetAdm,
  HomeClient,
  Info,
  EditInfo,
} from "../screens";
import Forgotpassword from "../screens/Forgotpassword";
import Forgotemail from "../screens/Forgopasswordtemail";

export default function Routes() {
  return (
    <Switch>
      <>
        <Route path="/" element={<HomeClient />} />
        <Route path="/catalogo-adm" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adicionar-produto" element={<AddProduct />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/perfil" element={<Profile />} />
        <Route
          path="/visualizar-produto"
          element={<ProductClient isAdmin={true} />}
        />
        <Route
          path="/produto-cliente"
          element={<ProductClient isAdmin={false} />}
        />
        <Route path="/informações-cadastro" element={<RegisterInformation />} />
        <Route path="/informações-gerais" element={<Info />} />
        <Route path="/home-orçamentos" element={<HomeBudgetAdm />} />
        <Route path="/Esqueci-a-senha" element={<Forgotpassword />} />
        <Route path="/email-de-recuperacao" element={<Forgotemail />} />
        <Route path="/editar-info" element={<EditInfo />} />
      </>
    </Switch>
  );
}
