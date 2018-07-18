// @flow

type LayoutStateType =
	| "form"
	| "loading"
	| "failed"
	| "desktopSubmitted"
	| "mobileSubmitted";

const getLayoutState = (
	loadingStatus: LoadingStatusType,
	viewport: ViewportVersionType
) => {
	switch (loadingStatus) {
		case "loading":
			return "loading";
		case "failed":
			return "failed";
		case "loaded": {
			if (viewport === "mobile" || viewport === "tablet") {
				return "mobileSubmitted";
			}
			return "desktopSubmitted";
		}
		default:
			return "form";
	}
};

export default getLayoutState;
