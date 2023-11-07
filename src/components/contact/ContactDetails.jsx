import SectionTitle from "../shared/sectionTitle/SectionTitle";
import styles from "./ContactDetails.module.css";
import { PiPhoneCallBold } from "react-icons/pi";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

const ContactDetails = () => {
  return (
    <div className="md:pt-[34px] pt-[24px] container">
      <SectionTitle title={"Let’s talk with us"} />
      <div className="grid grid-cols-1 md:grid-cols-8 mt-[31px]">
        <div className="lg:col-span-3  bg-[#22CD5A] rounded-md py-10 px-10">
          <div className=" h-full flex justify-between flex-col">
            <div className=" ">
              <h2 className="text-white  lg:text-[28px] text-[22px] font-semibold">
                Contact Information
              </h2>
              <p className="lg:text-lg text-base text-white  font-normal mt-[6px]">
                Say something to start a live chat!
              </p>
            </div>
            <div className=" flex flex-col lg:gap-[50px] gap-[25px]">
              <div className="flex gap-[25px] items-center">
                <PiPhoneCallBold color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  +880 1727887729
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <BsFillEnvelopeFill color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  hello@tradeventures.pro
                </span>
              </div>
              <div className="flex gap-[25px] items-center">
                <MdLocationPin color="#fff" size={30} />
                <span className="text-base font-400 text-white ">
                  Banani 11, Dhaka, Bangladesh
                </span>
              </div>
            </div>
            <div className="flex items-center gap-[10px]">
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaFacebookF size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaYoutube size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaInstagram size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaLinkedinIn size={20} className="" />
              </Link>
              <Link
                href="#"
                className="w-[40px] h-[40px] bg-transparent rounded-full border border-white flex items-center justify-center duration-300 hover:bg-white text-white hover:text-[#032D2C]    "
              >
                <FaTwitter size={20} className="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 bg-yellow-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas unde
          neque voluptate officiis reprehenderit natus quam fugiat quidem
          delectus ullam doloremque dolorum quo, minima optio facilis sequi
          rerum necessitatibus exercitationem explicabo assumenda facere
          possimus quod ad id? Esse placeat repellendus magni dolores? Sed,
          quisquam quas modi voluptas, esse eveniet molestias nobis in, rerum ad
          alias! Nostrum consectetur enim dignissimos deleniti, vitae dicta
          possimus obcaecati accusantium consequuntur. Commodi nesciunt eum,
          aut, sapiente illo corporis expedita eos doloribus voluptatum
          voluptatem repellendus sequi unde? Quasi quibusdam ab accusantium
          eligendi maxime iste repellat natus explicabo et. Delectus quisquam
          totam corporis ducimus, exercitationem quia, eligendi amet natus
          placeat, at maxime? Iste, eius, atque autem voluptatum vitae at itaque
          molestias illo amet veritatis quis veniam consectetur corporis nihil
          doloremque? Nihil fugiat odit temporibus facilis hic unde nulla
          voluptatum ex odio laudantium impedit aperiam voluptate similique
          consequuntur velit tenetur culpa soluta veritatis recusandae deserunt
          nostrum, porro quae ullam ipsum? Dicta excepturi cum ratione obcaecati
          recusandae harum magni debitis! Provident distinctio debitis suscipit
          dolore beatae est ratione vel eligendi qui. Eos aperiam eaque rem
          dignissimos, assumenda doloremque illo debitis quasi molestias animi
          adipisci ea corporis, odit voluptate harum quibusdam nemo quo vitae
          officiis culpa, ducimus id totam ullam. Excepturi est cupiditate
          deleniti quo impedit tempora earum ab nisi omnis, provident aliquam
          hic perspiciatis aspernatur obcaecati dolor quaerat quasi et
          temporibus enim. Perspiciatis placeat tempora temporibus dicta
          blanditiis odio veniam beatae neque ut voluptas aliquam reiciendis
          quasi, corporis officia voluptatum sit perferendis quas quos nulla
          natus deleniti! Dignissimos perferendis excepturi ut adipisci, autem
          quae tempore nesciunt praesentium expedita eaque dolorum doloremque
          consequatur? Saepe necessitatibus atque minus id adipisci sit mollitia
          eligendi nobis esse. Id quo quod earum et similique expedita! Dolorem
          aspernatur iure incidunt in mollitia nulla velit magnam tempore
          quisquam sunt! Maxime blanditiis autem culpa necessitatibus tempora
          voluptatum repellendus porro, iste labore itaque, nisi ratione odio
          aliquid aperiam sunt at error quod accusamus aliquam, tenetur mollitia
          fugit. Quaerat cupiditate iure recusandae placeat enim quod blanditiis
          nam facere, quia dolore sint error magnam nostrum commodi, esse illo
          inventore adipisci. Numquam quidem sint ut dolores eos, officia
          voluptatem in explicabo exercitationem neque expedita perspiciatis
          modi incidunt odit, delectus velit obcaecati inventore labore!
          Perspiciatis nobis qui facere non ipsum? Nostrum accusamus, numquam
          similique enim, tenetur natus commodi quam quos laborum ab doloribus
          ex explicabo eveniet! Dignissimos excepturi laborum velit distinctio,
          molestiae quasi, rerum vitae, repellendus error rem autem qui minus
          laudantium.
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
