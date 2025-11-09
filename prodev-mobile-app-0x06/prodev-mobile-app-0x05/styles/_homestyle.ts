import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  searchGroup: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: "#666",
  },
  searchControl: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
  },
  searchButton: {
    backgroundColor: "#34967C",
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 24,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    height: 50,
    justifyContent: "space-between",
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  paginationContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
