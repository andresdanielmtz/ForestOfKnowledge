import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    
      title: { 
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
      },
    
      subtitle:{ 
        fontSize: 15, 
        justifyContent: 'center',
      },

      container_dark:{ 
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title_dark:{ 
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'center',
        color: '#fff',
      },
      subtitle_dark: {
        fontSize: 15, 
        justifyContent: 'center',
        color: '#fff',
      }
});
