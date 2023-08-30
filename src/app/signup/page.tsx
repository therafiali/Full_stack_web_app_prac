import SignupFormComp from "@/components/views/Signup";
import ContextWrapper from "../global/Context";



const SignupForm = () => {
    return (
        <ContextWrapper>
            <SignupFormComp />
        </ContextWrapper>
    );
};

export default SignupForm;