export const getThemeGames = async (id: string) => {
	try {
		const response = await fetch(`http://ec2-18-222-196-33.us-east-2.compute.amazonaws.com:8080/api/v1/decks?tag=${id}`)
		if (!response.ok) {
      		throw new Error('Network response was not ok');
    	}
		const data = await response.json();
		return data;
	}
	catch (error) {
		console.error(error);
		throw error;
	}
}