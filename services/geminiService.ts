
import {GoogleGenAI} from "@google/genai";

// Initialize the Gemini API client using the mandatory named parameter and direct environment variable access.
const ai = new GoogleGenAI({apiKey: process.env.API_KEY});

export const generateAIPitch = async (businessName: string): Promise<string> => {
  try {
    // Calling generateContent with a prompt focused on local merchants and digital growth.
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Atue como um redator de elite focado em marketing para pequenos e médios empresários locais. Escreva uma proposta de valor para a agência ${businessName}. O tom deve ser profissional, acolhedor e focado em RESULTADOS. Destaque que ajudamos o comerciante que ainda não tem site a se profissionalizar, atrair clientes da região e vender mais através de um design impecável. Máximo 35 palavras, em PORTUGUÊS.`,
    });
    
    return response.text?.trim() || "ArgusTech: Transformamos seu negócio local em uma potência digital. Criamos sites profissionais que colocam sua marca no mapa, atraem clientes qualificados e garantem o crescimento que sua empresa merece.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "ArgusTech: Elevando o comércio local ao nível digital de elite. Criamos sua primeira presença online com design profissional para atrair mais clientes e destacar sua marca em toda a região.";
  }
};
