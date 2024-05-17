import SyntaxHighlighter from "react-syntax-highlighter";
import ClickableImage from "../components/ClickableFullSizeImage";
import EmailSignup from "../components/EmailSignup";
import {
  ArticleContentContainer,
  Code,
  Section,
  SectionHeader,
  SubsectionHeader,
} from "../components/StyledComponents";

const modelCode = `import datetime
import uuid
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
from sqlalchemy import ARRAY, DateTime, ForeignKey, String
from sqlalchemy.sql import func

class Base(DeclarativeBase):
    pass

class Newsletter(Base):
__tablename__ = "newsletter"

email: Mapped[str] = mapped_column(primary_key=True)
food: Mapped[bool] = mapped_column(server_default=str(True))
gardening: Mapped[bool] = mapped_column(server_default=str(True))
crafts: Mapped[bool] = mapped_column(server_default=str(True))
coding: Mapped[bool] = mapped_column(server_default=str(True))
books: Mapped[bool] = mapped_column(server_default=str(True))
antiquing: Mapped[bool] = mapped_column(server_default=str(True))`;

const lambdaCode1 = `from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads

username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    path_parameters = event.get("pathParameters", {})
    email = path_parameters.get("email")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }

    sql = "SELECT * FROM newsletter WHERE email = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        cursor.execute(sql, (email,))
        results = cursor.fetchone()

    if results is None:
        return {
            "statusCode": 404,
            "body": dumps({"message": f"Email not found: {email}"}),
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    result = {
        "food": results.get("food"),
        "gardening": results.get("gardening"),
        "crafts": results.get("crafts"),
        "coding": results.get("coding"),
        "books": results.get("books"),
        "antiquing": results.get("antiquing")
    }
    
    return {
        "statusCode": 200,
        "body": dumps(result),
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }`;

const lambdaCode2 = `from os import environ
from psycopg2 import connect, DatabaseError
from psycopg2.extras import RealDictCursor
from psycopg2.errors import IntegrityError
from sys import exit
from json import dumps, loads
from base64 import b64decode

username = environ.get("POSTGRES_USERNAME")
password = environ.get("POSTGRES_PASSWORD")
host = environ.get("POSTGRES_HOST")
port = environ.get("POSTGRES_PORT")
db_name = environ.get("POSTGRES_DB_NAME")

def lambda_handler(event, context):
    try:
        conn = connect(host=host, database=db_name, user=username, password=password, port=port)
    except DatabaseError as e:
        print("Could not connect to db", e)
        exit(1)

    path_params = event.get("pathParameters", {})
    email = path_params.get("email")
    body = loads(event.get("body", {}))
    food = body.get("food")
    gardening = body.get("gardening")
    crafts = body.get("crafts")
    coding = body.get("coding")
    books = body.get("books")
    antiquing = body.get("antiquing")

    if email is None: 
        return {
            "statusCode": 400,
            "body": "'email' required in path",
            'headers' : {
                'Access-Control-Allow-Origin' : '*'
            }
        }
    
    sql = "UPDATE newsletter SET food = %s, gardening = %s, crafts = %s, coding = %s, books = %s, antiquing = %s WHERE email = %s"

    with conn.cursor(cursor_factory=RealDictCursor) as cursor:
        try:
            cursor.execute(sql, (food, gardening, crafts, coding, books, antiquing, email))
            conn.commit()
        except Exception as e:
            return {
                "statusCode": 500,
                "body": dumps({"error": e}),
                'headers' : {
                    'Access-Control-Allow-Origin' : '*'
                }
            }


    return {
        "statusCode": 204,
        'headers' : {
            'Access-Control-Allow-Origin' : '*'
        }
    }`;

const terraformCodeLambda = `module "get_email_preferences_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "get_email_preferences"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}

module "update_email_preferences_lambda" {
  source = "../lambda"

  database_host     = var.database_host
  database_port     = var.database_port
  database_username = var.database_username
  database_password = var.database_password
  database_name     = var.database_name
  function_name     = "update_email_preferences"
  table_name        = "newsletter"

  lambda_layer_arns = var.lambda_layer_arns
}`;

const terraformCodeApiGateway = `resource "aws_apigatewayv2_integration" "get_email_preferences_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.get_email_preferences_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_integration" "update_email_preferences_lambda_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"

  connection_type      = "INTERNET"
  integration_method   = "POST"
  integration_uri      = module.update_email_preferences_lambda.invoke_arn
  passthrough_behavior = "WHEN_NO_MATCH"
}

resource "aws_apigatewayv2_route" "get_email_preferences_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /newsletter/{email}/preferences"

  target = "integrations/\${aws_apigatewayv2_integration.get_email_preferences_lambda_integration.id}"
}

resource "aws_apigatewayv2_route" "update_email_preferences_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "PUT /newsletter/{email}/preferences"

  target = "integrations/\${aws_apigatewayv2_integration.update_email_preferences_lambda_integration.id}"
}


resource "aws_lambda_permission" "get_email_preferences_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.get_email_preferences_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "\${aws_apigatewayv2_api.api.execution_arn}/*"
}

resource "aws_lambda_permission" "update_email_preferences_lambda_permission" {
  statement_id  = "AllowAPIGatewayInvoke"
  action        = "lambda:InvokeFunction"
  function_name = module.update_email_preferences_lambda.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "\${aws_apigatewayv2_api.api.execution_arn}/*"
}`;

const reactCode = `import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Snackbar,
  styled,
} from "@mui/material";
import axios, { AxiosResponse } from "axios";
import { SyntheticEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PreferencesContainer = styled("div")({
  padding: "10px",
});

interface Preferences {
  food: boolean;
  gardening: boolean;
  crafts: boolean;
  coding: boolean;
  books: boolean;
  antiquing: boolean;
}

const Preferences: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const email = searchParams.get("email");

  const [preferences, setPreferences] = useState<Preferences>({
    food: false,
    gardening: false,
    crafts: false,
    coding: false,
    books: false,
    antiquing: false,
  });

  useEffect(() => {
    const getPreferences = async () => {
      const res: AxiosResponse<Preferences> = await axios.get(
        \`\${process.env.REACT_APP_API_URL}/newsletter/\${email}/preferences\`,
      );
      setPreferences(res.data);
    };

    getPreferences();
  }, [email]);

  const setPreference = (preference: keyof Preferences, value: boolean) => {
    setPreferences({ ...preferences, [preference]: value });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        \`\${process.env.REACT_APP_API_URL}/newsletter/\${email}/preferences\`,
        preferences,
      );
      setSnackbarOpen(true);
    } catch (e) {
      console.error(e);
    }
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleSnackbarClose = (
    event: SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const categories = [
    "Food",
    "Gardening",
    "Crafts",
    "Coding",
    "Books",
    "Antiquing",
  ];
  return (
    <PreferencesContainer>
      <h2>Email Preferences</h2>
      {categories.map((category) => (
        <FormGroup key={category}>
          <FormControlLabel
            control={<Checkbox />}
            label={category}
            checked={preferences[category.toLowerCase() as keyof Preferences]}
            onChange={() =>
              setPreference(
                category.toLowerCase() as keyof Preferences,
                !preferences[category.toLowerCase() as keyof Preferences],
              )
            }
          />
        </FormGroup>
      ))}
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        message="Successfully saved preferences"
      />
    </PreferencesContainer>
  );
};

export default Preferences;
`;

const EmailPreferences: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I've sucessfully added email preferences! You can now choose to
          receive newsletters for certain categories. All you have to do is
          click the "Preferences" link from the newsletter email, and you can
          toggle which categories you want to receive new article emails for~
        </p>
        <p>And if you haven't signed up for emails yet, you can do it below!</p>
        <EmailSignup />
      </Section>
      <Section>
        <SectionHeader>Techincal Implementation</SectionHeader>
        <p>To add email preferences, I completed the following steps:</p>
        <ol>
          <li>
            Run a migration to add category preferences columns to the
            newsletter table that stores emails
          </li>
          <li>
            Add lambdas to retreive and update email preferences for a user
          </li>
          <li>Add endpoints to API Gateway integrated with the new lambdas</li>
          <li>Make new preferences page in UI</li>
          <li>
            Utilize new endpoints to allow users to toggle their email
            preferences
          </li>
          <li>Add link to new preferences page in newsletter email template</li>
          <li>
            Update send newsletter email lambda to respect user preferences
          </li>
        </ol>
      </Section>
      <Section>
        <SubsectionHeader>
          Generating and running an alembic migration
        </SubsectionHeader>
        <p>
          Generating and running an alembic migration is simple. First, I
          updated my model to reflect the changes I wanted to make: in this
          case, I added columns for each category so that a user can toggle
          which category they want to receive emails for. I wanted each new
          column to default to <Code>True</Code>. Below is the snippet of python
          code:
        </p>
        <SyntaxHighlighter language="python">{modelCode}</SyntaxHighlighter>
        <p>
          Then, I ran{" "}
          <Code>
            alembic revision --autogenerate -m "Add preferences to newsletter
            table"
          </Code>{" "}
          to generate a migration, which looked fine, so I ran{" "}
          <Code>alembic upgrade head</Code> to apply the migration. Below, I
          verified the migration applied with correct values by using a simple
          select statement:
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/migrated_newsletter_table.jpeg`}
        />
      </Section>
      <Section>
        <SubsectionHeader>
          Getting and Putting with AWS Lambdas
        </SubsectionHeader>
        <p>
          After the migration was complete, I could start writing the lambdas to
          retreive and update the new columns. First, I wrote a lambda for
          getting a user's email preferences:
        </p>
        <SyntaxHighlighter language="python">{lambdaCode1}</SyntaxHighlighter>
        <p>Then, I wrote a lambda for updating the user's email preferences:</p>
        <SyntaxHighlighter language="python">{lambdaCode2}</SyntaxHighlighter>
        <p>
          Then, I was able to use my lambda terraform module to create the
          lambdas in AWS:
        </p>
        <SyntaxHighlighter language="hcl">
          {terraformCodeLambda}
        </SyntaxHighlighter>
        <p>
          Here, I used <Code>terraform apply</Code> to create the new lambdas
          from the terraform code.
        </p>
      </Section>
      <Section>
        <SubsectionHeader>
          Invoking AWS Lambda with AWS API Gateway
        </SubsectionHeader>
        <p>
          This section was pretty copy/paste from code I already had. Basically,
          I needed to first set the new lambdas as AWS Proxy integrations with
          my API Gateway, then assign the integrations to a route, then ensure
          API Gateway has permissions to invoke the lambda.
        </p>
        <SyntaxHighlighter language="hcl">
          {terraformCodeApiGateway}
        </SyntaxHighlighter>
        <p>
          After writing this, I did another <Code>terraform apply</Code> to get
          the changes in AWS.
        </p>
      </Section>
      <Section>
        <SubsectionHeader>
          Using API gateway endpoints in a React component
        </SubsectionHeader>
        <p>
          This section is pretty straightforward using axios. The below code is
          getting and setting user preferences, as well as showing a snackbar
          when the preferences are successfully saved.
        </p>
        <SyntaxHighlighter language="typescript">{reactCode}</SyntaxHighlighter>
        <p>
          Then, I added a route to my router to get to the preferences and
          linked it in my email template, and I was done! So, with all that, now
          you can select which categories you would like to receive new article
          updates about! 🌸
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default EmailPreferences;
