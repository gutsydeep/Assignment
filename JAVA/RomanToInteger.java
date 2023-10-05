package JAVA;

import java.util.*;

public class RomanToInteger{	
private static final Map<Character,Integer> romanString = new HashMap<Character, Integer>() {
    {
	    put('I', 1);
	    put('V', 5);
	    put('X', 10);
	    put('L', 50);
	    put('C', 100);
	    put('D', 500);
	    put('M', 1000);
    }
};

private static int RomanToInt(String str)
{
	int sum = 0;
	int n = str.length();
	for(int i = 0; i < n; i++) 
	{	 
		if (i != n - 1 && romanString.get(str.charAt(i)) < romanString.get(str.charAt(i + 1)))
		{
			sum += romanString.get(str.charAt(i + 1)) -romanString.get(str.charAt(i));
            i++;
		} 
		else
		{
			sum += romanString.get(str.charAt(i));
		}
	}
	return sum;
}
public static void main(String[] args) {

    Scanner sc= new Scanner(System.in);  
    System.out.print("Enter a string: ");

    String str= sc.nextLine(); 
    System.out.print("Integer form of Roman Numeral is " +RomanToInt(str));
    }
}
