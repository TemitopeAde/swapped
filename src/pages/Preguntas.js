import { Box, Stack } from "@mui/material";
import React, {useEffect} from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./salesterms.css";

const Preguntas = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box className="sales-terms">
      <Header />
      <Box className="p-3">
        <h6 className="mb-4">Preguntas Frecuentes</h6>
        <Stack spacing={3}>
          <p>
            Condiciones generales de uso del sitio web https//www.certideales y
            venta de productos a traves del mismo. <br />
            Informacion actualizada el 18 dle abril de 2016
          </p>
          <p>
            Certideal estoblece una serne de servicios que permiten a los
            Usuanos de Internet, crear y entablar relaciones comerciales, con e
            objetivo de vender y comprar productos reacondicionados, de segunda
            mano o nuevos, como iPhones, smartphones, consolas, tabletas,
            televisores, de varias marcas como Apple, Samsung y diferentes
            modelos, etc - Estos servicios eston disponibles directamente en el
            sitio web de Certideal y, en algunos casos, en el sitio web de uno o
            varios de sus socios. Certideal tombién puede, cuando corresponda,
            ofrecer directamente para la venta sus propios productos o nuevOS
            productos de marcas asociadas.
          </p>
          <p>
            El proposito de estos Téminos y condiciones Generales de Vernta es
            de definir las condiciones bajo las cuales Certideal, directamente o
            a través del sitio web de un socio, permite a los usuarios acceder,
            explorar el sitio, y define la manera en que los servicios son
            proporcionados a los usuarios. Permitiéndoles vender o comprar
            productos entre ellos y tombién ofreciendo directamente productos
            para la venta.
          </p>
          <p>
            Las Condiciones Generales de Venta incluyen los derechos y
            obligaciones de los usuarios de lnternet. Se recomienda leerlos.
          </p>
          <p>
            Se invitoró a los usuarios a aceptar los Términos y condiciones
            cuando naveguen por el Sitio y, en particular, al crear una cuenta,
            independientemente de si se realizará un transaccion en el sitio o
            si solo se va a consultar el Sitio web. Si un usuario no acepta los
            Términos y condiciones, no podrá ni registrarse ni realizor una
            compra/ venta en el sitio
          </p>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default Preguntas;
