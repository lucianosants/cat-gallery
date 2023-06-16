type PhotoId = string;

type PhotoImage = {
	url: string;
};

type PhotoTitle = {
	title: [
		{
			text: {
				content: string;
			};
		}
	];
};

type PhotoProperties = {
	image: PhotoImage;
	title: PhotoTitle;
};

type PhotoProps = {
	id: PhotoId;
	properties: PhotoProperties;
};
