import { Input } from "./atoms/Input";
import { Label } from "./atoms/Label";
import { SubmitButtom } from "./atoms/SubmitButton";
import { TextArea } from "./atoms/TextArea";
import { Select } from "./atoms/select";

export const PostMessage = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-xl font-bold sm:text-3xl">Post a message</h2>
        </div>
        <div className="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10">
          <form>
            <div className="mb-4 sm:mb-8">
              <Label text="To"></Label>
              <Select></Select>
            </div>
            <div className="mb-4 sm:mb-8">
              <Label text="Date"></Label>
              <Input placeholder="9999-12-31"></Input>
            </div>
            <div className="mb-4 sm:mb-8">
              <Label text="Title"></Label>
              <Input placeholder="Title"></Input>
            </div>
            <div>
              <Label text="Message"></Label>
              <div className="mt-1">
                <TextArea placeholder="Leave a message here ..."></TextArea>
              </div>
            </div>
            <div className="mt-6 grid">
              <SubmitButtom name="Submit"></SubmitButtom>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
