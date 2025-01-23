import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";
import { useState } from "react";

import { BackgroundContainer, Container, InputContainer } from "./Login.styles";

import { EyeFilledIcon } from "@/icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";

export function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible((oldValue) => !oldValue);
  };

  const handleShowSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  return (
    <Container>
      <BackgroundContainer>
        <div className="flex justify-center bg-white items-center rounded-r-md flex-col w-1/2 h-full">
          <div className="flex items-center text-xl pb-2 font-bold">
            Sign In
          </div>
          <InputContainer>
            <Input
              isRequired
              className="w-full"
              placeholder="Enter your Login"
              type="text"
            />
            <Input
              className="w-full"
              endContent={
                <button
                  aria-label="toggle password visibility"
                  className="focus:outline-none"
                  type="button"
                  onClick={handleToggleVisibility}
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              placeholder="Enter your Password"
              type={isVisible ? "text" : "password"}
            />
            <Checkbox>Remember Me</Checkbox>
            <Button className="w-full" color="primary" variant="bordered">
              Sign In
            </Button>
          </InputContainer>
        </div>
        <div className="bg-gradient-to-l from-blue-500 to-blue-600 w-1/2 h-full flex-1 rounded-r-md flex items-center justify-center">
          <div className="flex items-center justify-center gap-3 flex-col">
            <div className="text-xl text-white">
              Doesn't have an account yet?
            </div>
            <Button
              color="default"
              variant="ghost"
              onClick={handleShowSignUpModal}
            >
              <div className="text-white">Sign Up</div>
            </Button>
          </div>
        </div>
      </BackgroundContainer>
    </Container>
  );
}
