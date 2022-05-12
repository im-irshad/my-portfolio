import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <a
        href={
          "https://wa.me?text=http://staging.bygoodiebox.com/se/sv/happyinvite?utm_source=referralutm_medium=happyinvite&invitationCode=fowlat-vy44z978"
        }
        data-action="share/whatsapp/share"
      >
        invite new1
      </a>
      <h5 className="my-3 font-medium text-bblue">
        I am a passionate IT-professional with an experience of working with
        Javascript, Typescript, React, Express, Node and MongoDB. Eager to learn
        more, active and always ready to accept the new challenges.
      </h5>
      <div className="p-4 my-5 bg-gray-300 flex-grow">
        <h6 className="my-3 text_xl font-bold text-dblue">What I Offer</h6>

        <div className="grid gap-6  ">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1"
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
