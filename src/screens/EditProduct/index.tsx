import { Button2 } from "../../components/Button2";
import ButtonNavBarAddProduct from "../../components/ButtonNavBarAddProduct";
import GrayBorder from "../../components/GrayBorder";
import GrayBorderTop from "../../components/GrayBorderTop";
import { SectionTitle } from "../../components/SectionTitle";
import { Title } from "../../components/Title";
import { Text } from "../../components/Text";
import { IProduct } from "../../contexts/interface";
import { transformPricePTBR } from "../../utils/scripts";

interface IData {
  product: IProduct;
}

const EditProduct = ({ product }: IData) => {
  return (
    <div className="w-full">
      <form className="px-7">
        <div className="flex justify-center items-center mt-4">
          <Title text="Edição do produto" />
        </div>

        <GrayBorderTop />

        <div className="mt-10 ">
          <SectionTitle text="Nome do produto" />
          <input
            className="mt-2 w-80 border rounded-md text-xs px-3 h-11"
            name="name"
            type="text"
            placeholder={product.name}
          />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Descrição" />
          <textarea
            className="mt-2 pt-3 w-80 border rounded-md text-xs px-3"
            placeholder={product.description}
            name="description"
            rows={4}
            cols={40}
          />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Unidades a partir de" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            name="price"
            type="text"
            placeholder={`${transformPricePTBR(product.price)}`}
          />
        </div>

        {/* Tabela de preços */}

        <div className="mt-10 ">
          <Title text="Tabela de preços" />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Opção 1" />
        </div>

        <div className="flex justify-between">
          <div className="mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              name="quantity"
              type="text"
              placeholder={`${product.quantity}`}
            />
          </div>

          <div className=" mt-3">
            <Text text="Valor p/ unidade" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={`${transformPricePTBR(product.price)}`}
            />
          </div>
        </div>

        <GrayBorder />

        <div className=" mt-4">
          <SectionTitle text="Opção 2" />
        </div>

        <div className="flex justify-between">
          <div className=" mt-3">
            <Text text="Quantidade mínima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={
                product.options && product.options.length > 0
                  ? `${product.options[0].min}`
                  : "0"
              }
            />
          </div>

          <div className=" mt-3">
            <Text text="Quantidade máxima" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={
                product.options && product.options.length > 0
                  ? `${product.options[0].max}`
                  : "0"
              }
            />
          </div>
        </div>

        <div className=" mt-4">
          <Text text="Valor p/ unidade" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder={
              product.options && product.options.length > 0
                ? `${transformPricePTBR(product.options[0].price)}`
                : "R$00,00"
            }
          />
        </div>

        {/* Personalização */}

        <div className=" mt-10">
          <Title text="Personalização" />
        </div>

        <div className=" mt-4">
          <SectionTitle text="Aroma" />
        </div>

        <div className="flex justify-between">
          <div className="mt-3">
            <Text text="Opção 1" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={
                product.aroma && product.aroma.length ? product.aroma[0] : ""
              }
            />
          </div>

          <div className=" mt-3">
            <Text text="Opção 2" />
            <input
              className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
              type="text"
              placeholder={
                product.aroma && product.aroma.length ? product.aroma[1] : ""
              }
            />
          </div>
        </div>

        {/* Acréscimo */}

        <div className=" mt-10">
          <SectionTitle text="Acréscimo" />
        </div>

        <div className=" mt-3">
          <Text text="Nome" />
          <input
            className="mt-2 p-2 w-80 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder={
              product.extras && product.extras.length
                ? product.extras[0].name
                : ""
            }
          />
        </div>

        <div className=" mt-3">
          <Text text="Valor" />
          <input
            className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
            type="text"
            placeholder={
              product.extras && product.extras.length
                ? `${product.extras[0].price}`
                : ""
            }
          />
        </div>

        {/* Tipo de fita */}

        <div className=" mt-10">
          <SectionTitle text="Tipos de fita" />
        </div>

        <div className=" mt-3">
          <Text text="Esse produto possui fita?" />
        </div>

        <div className="flex mt-2 text-xs">
          <div className="flex justify-between w-full">
            <div className="mt-6">
              <Text text="Opção 1" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                placeholder={
                  product.tapes && product.tapes.length ? product.tapes[0] : ""
                }
              />
            </div>

            <div className=" mt-6">
              <Text text="Opção 2" />
              <input
                className="mt-2 p-2 w-36 border rounded-md text-xs px-3 h-11"
                type="text"
                placeholder={
                  product.tapes && product.tapes.length ? product.tapes[1] : ""
                }
              />
            </div>
          </div>
        </div>

        <div className="flex justify-around mt-10">
          <div className="p-4 h-20">
            <Button2 label="Salvar" type="submit" classes="my-0"/>
          </div>
        </div>

        <ButtonNavBarAddProduct />
      </form>
    </div>
  );
};

export default EditProduct;
