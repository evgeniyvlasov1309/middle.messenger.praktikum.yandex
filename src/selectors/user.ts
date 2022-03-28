import { connect } from "../utils/utils";

const withUser = connect((state) => ({ user: state.user }));

export default withUser;
