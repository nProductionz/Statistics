namespace Homework1_c_
{
    public partial class Form1 : Form
    {
        private int x;
        private int y;
        public Form1()
        {
            InitializeComponent();
            x = pictureBox1.Width / 2;
            y = pictureBox1.Height / 2;
        }

        private void button1_Click(object sender, EventArgs e)
        //metodo per il cerchio
        {
            using (Graphics g = pictureBox1.CreateGraphics())
            {
                int circleRadius = 50;
                int circleX = x - circleRadius;
                int circleY = y - circleRadius;

                Pen pen = new Pen(Color.Red, 2);
                g.DrawEllipse(pen, circleX, circleY, circleRadius * 2, circleRadius * 2);
            }

        }

        private void button2_Click(object sender, EventArgs e)
        //metodo per il punto
        {
            using (Graphics g = pictureBox1.CreateGraphics())
            {
                int ellipseWidth = 5;
                int ellipseHeight = 5;
                int ellipseX = x - (ellipseWidth / 2);
                int ellipseY = y - (ellipseHeight / 2);

                Brush brush = new SolidBrush(Color.Red);
                g.FillEllipse(brush, ellipseX, ellipseY, ellipseWidth, ellipseHeight);
            }
        }
        private void button3_Click(object sender, EventArgs e)
        //metodo per la linea
        {
            using (Graphics g = pictureBox1.CreateGraphics())
            {
                int lineLength = 100;
                int lineThickness = 2;

                int startX = x - (lineLength / 2);
                int startY = y;
                int endX = x + (lineLength / 2);
                int endY = y;

                Pen pen = new Pen(Color.Blue, lineThickness);
                g.DrawLine(pen, startX, startY, endX, endY);
            }
        }
        private void button4_Click(object sender, EventArgs e)
        //metodo per il rettangolo
        {
            using (Graphics g = pictureBox1.CreateGraphics())
            {
                int rectWidth = 100;
                int rectHeight = 50;

                int rectX = x - (rectWidth / 2);
                int rectY = y - (rectHeight / 2);

                Pen pen = new Pen(Color.Green, 2);
                g.DrawRectangle(pen, rectX, rectY, rectWidth, rectHeight);
            }

        }



        private void Clear()
        {
            pictureBox1.Invalidate();
        }
        private void pictureBox1_Paint(object sender, PaintEventArgs e)
        {
            e.Graphics.Clear(Color.White);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            Clear();
        }


    }
}