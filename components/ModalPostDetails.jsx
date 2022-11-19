import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import PostDetails from "./PostDetails";

export default function ModalPostDetails(props) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={props.showModal}
			onRequestClose={props.closeModalFuntion}
		>
			<View style={styles.centeredView}>

				<View style={styles.modalView}>
					<Pressable 
						style={{width: "100%", justifyContent: "center", alignContent: "flex-end", paddingHorizontal: 12, paddingVertical: 8, marginBottom: 6}}
						onPress={props.closeModalFuntion}
					>
						<Text style={{textAlign: "right"}}>Close</Text>
					</Pressable>

					<View style={{padding: 16, paddingTop: 0}}>
						<PostDetails post={props.post}/>
					</View>
					
				</View>

			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		backgroundColor: '#23232360',
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		width: "100%",
		backgroundColor: "white",
		borderRadius: 6,
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5
	},
	button: {
		borderRadius: 20,
		padding: 10,
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center"
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center"
	}
});
