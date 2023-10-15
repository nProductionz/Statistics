namespace Progetto_Statistics
{
    using Microsoft.Office.Interop.Excel;
    using System.Runtime.InteropServices;
    public partial class Form1 : Form
    {

        List<string> listaPaesiTotale = new List<string>();
        List<string> listaSessoTotale = new List<string>();
        List<string> listaAltezzaTotale = new List<string>();



        List<string> listaSesso = new List<string>();
        List<string> numeroAssolutoSesso = new List<string>();
        List<string> numeroRelativoSesso = new List<string>();

        List<string> listaAltezza = new List<string>();
        List<string> numeroAssolutoAltezza = new List<string>();
        List<string> numeroRelativoAltezza = new List<string>();

        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {

            string fname = "";
            OpenFileDialog fdlg = new OpenFileDialog();
            fdlg.Title = "Excel File Dialog";
            fdlg.InitialDirectory = @"c:\";
            fdlg.Filter = "All files (*.*)|*.*|All files (*.*)|*.*";
            fdlg.FilterIndex = 2;
            fdlg.RestoreDirectory = true;
            if (fdlg.ShowDialog() == DialogResult.OK)
            {
                fname = fdlg.FileName;
            }


            Microsoft.Office.Interop.Excel.Application xlApp = new Microsoft.Office.Interop.Excel.Application();
            Microsoft.Office.Interop.Excel.Workbook xlWorkbook = xlApp.Workbooks.Open(fname);
            Microsoft.Office.Interop.Excel._Worksheet xlWorksheet = xlWorkbook.Sheets[1];
            Microsoft.Office.Interop.Excel.Range xlRange = xlWorksheet.UsedRange;

            int rowCount = xlRange.Rows.Count;
            int colCount = xlRange.Columns.Count;

            // dt.Column = colCount;  
            dataGridView1.ColumnCount = colCount;
            dataGridView1.RowCount = rowCount;

            for (int i = 1; i <= rowCount; i++)
            {
                for (int j = 1; j <= colCount; j++)
                {


                    //write the value to the Grid  


                    if (xlRange.Cells[i, j] != null && xlRange.Cells[i, j].Value2 != null)
                    {
                        dataGridView1.Rows[i - 1].Cells[j - 1].Value = xlRange.Cells[i, j].Value2.ToString();
                        if (j == 26)
                        {
                            listaPaesiTotale.Add(xlRange.Cells[i, j].Value2.ToString());
                        }
                        if (j == 14)
                        {
                            listaSessoTotale.Add(xlRange.Cells[i, j].Value2.ToString());
                        }
                        if (j == 17)
                        {
                            listaAltezzaTotale.Add(xlRange.Cells[i, j].Value2.ToString());
                        }
                    }
                    // Console.Write(xlRange.Cells[i, j].Value2.ToString() + "\t");  
                    //add useful things here!     
                }
            }
            paese();
            altezza();
            sesso();
            //cleanup  
            GC.Collect();
            GC.WaitForPendingFinalizers();

            //rule of thumb for releasing com objects:  
            //  never use two dots, all COM objects must be referenced and released individually  
            //  ex: [somthing].[something].[something] is bad  

            //release com objects to fully kill excel process from running in the background  
            Marshal.ReleaseComObject(xlRange);
            Marshal.ReleaseComObject(xlWorksheet);

            //close and release  
            xlWorkbook.Close();
            Marshal.ReleaseComObject(xlWorkbook);

            //quit and release  
            xlApp.Quit();
            Marshal.ReleaseComObject(xlApp);



        }


        public void paese()
        {
            List<string> listaPaesi = new List<string>();
            List<int> listaPaesi2 = new List<int>();
            List<string> numeroPercentualePaesi = new List<string>();
            List<string> numeroRelativoPaesi = new List<string>();

            foreach (string x in listaPaesiTotale)
            {
                if (!listaPaesi.Contains(x))
                {
                    listaPaesi.Add(x);
                    listaPaesi2.Add(1);
                }
                else
                {
                    int position = listaPaesi.IndexOf(x);
                    listaPaesi2[position]++;
                }
            }
            int lunghezza = listaPaesi.Count;
            string array1 = "";
            string array2 = "";
            string array3 = "";
            for (int i = 1; i < lunghezza; i++)
            {
                array1 = " " + listaPaesi[i] + " " + listaPaesi2[i];
                array3 = array2 + array1;
                array2 = array3;

            }
            label13.Text = "" + array3;


            int totale = listaPaesiTotale.Count - 1;
            float[] relativoArray = new float[lunghezza];
            for (int j = 1; j < listaPaesi2.Count; j++)
            {
                float value = (float)listaPaesi2[j] / (float)totale;
                relativoArray[j] = (float)System.Math.Round(value, 2);
            }

            string array4 = "";
            string array5 = "";
            string array6 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array4 = " " + listaPaesi[k] + " " + relativoArray[k];
                array6 = array5 + array4;
                array5 = array6;

            }
            label5.Text = "" + array6;

            string array7 = "";
            string array8 = "";
            string array9 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array7 = " " + listaPaesi[k] + " " + relativoArray[k] * 100 + "%";
                array9 = array8 + array7;
                array8 = array9;

            }
            label6.Text = "" + array9;

        }



        public void sesso()
        {
            List<string> listaPaesi = new List<string>();
            List<int> listaPaesi2 = new List<int>();
            List<string> numeroPercentualePaesi = new List<string>();
            List<string> numeroRelativoPaesi = new List<string>();

            foreach (string x in listaSessoTotale)
            {
                if (!listaPaesi.Contains(x))
                {
                    listaPaesi.Add(x);
                    listaPaesi2.Add(1);
                }
                else
                {
                    int position = listaPaesi.IndexOf(x);
                    listaPaesi2[position]++;
                }
            }
            int lunghezza = listaPaesi.Count;
            string array1 = "";
            string array2 = "";
            string array3 = "";
            for (int i = 1; i < lunghezza; i++)
            {
                array1 = " " + listaPaesi[i] + " " + listaPaesi2[i];
                array3 = array2 + array1;
                array2 = array3;

            }
            label7.Text = "" + array3;


            int totale = listaSessoTotale.Count - 1;
            float[] relativoArray = new float[lunghezza];
            for (int j = 1; j < listaPaesi2.Count; j++)
            {
                float value = (float)listaPaesi2[j] / (float)totale;
                relativoArray[j] = (float)System.Math.Round(value, 2);
            }

            string array4 = "";
            string array5 = "";
            string array6 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array4 = " " + listaPaesi[k] + " " + relativoArray[k];
                array6 = array5 + array4;
                array5 = array6;

            }
            label8.Text = "" + array6;

            string array7 = "";
            string array8 = "";
            string array9 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array7 = " " + listaPaesi[k] + " " + relativoArray[k] * 100 + "%";
                array9 = array8 + array7;
                array8 = array9;

            }
            label9.Text = "" + array9;
        }
         public void altezza()
        {
            List<string> listaPaesi = new List<string>();
            List<int> listaPaesi2 = new List<int>();
            List<string> numeroPercentualePaesi = new List<string>();
            List<string> numeroRelativoPaesi = new List<string>();

            foreach (string x in listaAltezzaTotale)
            {
                if (!listaPaesi.Contains(x))
                {
                    listaPaesi.Add(x);
                    listaPaesi2.Add(1);
                }
                else
                {
                    int position = listaPaesi.IndexOf(x);
                    listaPaesi2[position]++;
                }
            }
            int lunghezza = listaPaesi.Count;
            string array1 = "";
            string array2 = "";
            string array3 = "";
            for (int i = 1; i < lunghezza; i++)
            {
                array1 = " " + listaPaesi[i] + " " + listaPaesi2[i];
                array3 = array2 + array1;
                array2 = array3;

            }
            label10.Text = "" + array3;


            int totale = listaAltezzaTotale.Count - 1;
            float[] relativoArray = new float[lunghezza];
            for (int j = 1; j < listaPaesi2.Count; j++)
            {
                float value = (float)listaPaesi2[j] / (float)totale;
                relativoArray[j] = (float)System.Math.Round(value, 2);
            }

            string array4 = "";
            string array5 = "";
            string array6 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array4 = " " + listaPaesi[k] + " " + relativoArray[k];
                array6 = array5 + array4;
                array5 = array6;

            }
            label11.Text = "" + array6;

            string array7 = "";
            string array8 = "";
            string array9 = "";
            for (int k = 1; k < lunghezza; k++)
            {
                array7 = " " + listaPaesi[k] + " " + relativoArray[k] * 100 + "%";
                array9 = array8 + array7;
                array8 = array9;

            }
            label12.Text = "" + array9;
        }

    }
}