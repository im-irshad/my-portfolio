import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <a
        href={
          "https://api.whatsapp.com/send?text=http%3A%2F%2Fstaging.bygoodiebox.com%2Fse%2Fsv%2Fhappyinvite%3Futm_source%3Dreferral%26utm_medium%3Dhappyinvite%26invitationCode%3Dfowlat-vy44z978"
        }
        data-action="share/whatsapp/share"
      >
        invite whatsapp
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
